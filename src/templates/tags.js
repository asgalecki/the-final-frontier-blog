import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';

import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import Main from '../components/Main/Main';
import Aside from '../components/Aside/Aside';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <Layout>
      <div className="layout__container">
        <Main>
          <div className="main__container">
            <h1>{tagHeader}</h1>
            {edges.map(({ node }) => (
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
        </Main>
        <Aside />
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            tags
          }
          excerpt
          excerptAst
        }
      }
    }
  }
`