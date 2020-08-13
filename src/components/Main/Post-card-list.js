import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const PostCard = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
                tags
              }
              fields {
                slug
              }
              excerpt
              excerptAst
            }
          }
        }
      }
    `
  )
  return (
    <div className="main__container">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <section className="post-card" key={node.id}>
          <img
            className="post-card__image"
            src={node.excerptAst.children[0].children[0].properties.src}
            alt={node.excerptAst.children[0].children[0].properties.alt}
          />
          <article className="post-card__details">
            <Link className="post-card__title" to={node.fields.slug}>
              <h1 className="post-card__title">{node.frontmatter.title}</h1>
            </Link>
            <p className="post-card__date">{node.frontmatter.date}</p>
            <p className="post-card__tags">
              {node.frontmatter.tags.map(tag => (
                <Link className="post-card__tag post-card__tag--margin" to={`/tags/${kebabCase(tag)}/`}>#{tag}</Link>
              ))}
            </p>
            <p className="post-card__description">{node.excerpt}
            <Link className="post-card__link" to={node.fields.slug}>Read more</Link></p>
          </article>
        </section>
      ))}
    </div>
  )
};

export default PostCard;