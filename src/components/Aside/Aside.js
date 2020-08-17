import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const Aside = () => {
  const data = useStaticQuery(
    graphql`
      query {
        tags: allMarkdownRemark{
          group(field: frontmatter___tags) {
            tag: fieldValue
            totalCount
          }
        }
        posts: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 3
          ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  return (
    <aside className="aside">
      <div className="aside__container">
        <section className="recent-posts">
          <h3 className="recent-posts__title">Recent posts</h3>
          {data.posts.edges.map(({ node }) => (
            <div className="recent-posts__post" key={node.id}>
              <Link className="recent-posts__link" to={node.fields.slug}>
                <h4 className="recent-posts__link">{node.frontmatter.title}</h4>
              </Link>
              <p className="recent-posts__date">{node.frontmatter.date}</p>
            </div>
          ))}
        </section>
        <section className="tags">
          <h3 className="tags__title">Tags</h3>
          <p className="tags__paragraph">
          {data.tags.group.map(({ tag, totalCount }) => (
            <Link className="post-card__tag post-card__tag--margin" to={`/tags/${kebabCase(tag)}/`}>#{tag}({totalCount})</Link>
          ))}
          </p>
        </section>
        <section className="links">
          <h3 className="links__title">Links</h3>
          <ul className="links__list">
            <li className="links__list--margin">
              <a className="links__link" href="https://www.nasa.gov/" target="_blank" rel="noreferrer">NASA</a>
            </li>
            <li className="links__list--margin">
              <a className="links__link" href="https://www.esa.int/" target="_blank" rel="noreferrer">European Space Agency</a>
            </li>
          </ul>
        </section>
      </div>
    </aside>
  )
};

export default Aside;