import React from "react";
import { Link } from "gatsby";
import kebabCase from 'lodash/kebabCase';

const PostCard = ({ posts, tagHeader, children }) => {
  return (
    <div className="main__container">
      {tagHeader &&
        <h1>{tagHeader}</h1>
      }
      <div className="post-card__container">
        {posts.map(({ node }) => (
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
        {children}
      </div>
    </div>
  )
}

export default PostCard;