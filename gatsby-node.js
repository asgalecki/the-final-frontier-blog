const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require("lodash");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  };
};

exports.createPages = async ({ graphql, actions, reporter }) => {

  const { createPage, createRedirect } = actions;

  // Paths
  const tagTemplate = path.resolve("src/templates/tags.js");
  const blogPostTemplate = path.resolve("src/templates/blog-post.js");
  const blogListTemplate = path.resolve("src/templates/blog-list-template.js");

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  // Redirect from index to ./blog
  createRedirect({
    fromPath: `/`,
    toPath: `/blog`,
    redirectInBrowser: true,
    isPermanent: true,
  });

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  };

  // Create post list page with pagination
  const posts = result.data.postsRemark.edges;
  const postsPerPage = 3;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // Create tag pages with pagination
  const tags = result.data.tagsGroup.group

  tags.forEach(tag => {
    const tagPostsPerPage = 3;
    const tagPages = Math.ceil(tag.totalCount / tagPostsPerPage);
    const tagPath = `/tags/${_.kebabCase(tag.fieldValue)}/`;
    Array.from({ length: tagPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `${tagPath}` : `${tagPath}${i + 1}`,
        component: tagTemplate,
        context: {
          limit: tagPostsPerPage,
          skip: i * tagPostsPerPage,
          tagPages,
          currentPage: i + 1,
          tag: tag.fieldValue,
        },
      });
    });
  });

  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
      }
    });
  });
};