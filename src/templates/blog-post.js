import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Main from '../components/Main/Main';
import Aside from '../components/Aside/Aside';
import SEO from "../components/Seo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div className="layout__container">
        <Main>
          <div className="main__container">
            <h1>{post.frontmatter.title}</h1>
            <p className="post-card__date post-card__date--right">{post.frontmatter.date}</p>
            <p className="post-card__tags post-card__tags--right">
              {post.frontmatter.tags.map(tag => (
                <Link className="post-card__tag post-card__tag--margin-left" to={`/tags/${kebabCase(tag)}/`} key={`tag-${tag}`}>#{tag}</Link>
              ))}
            </p>
            <div className="post-card__image">
              <Img className="post-card__image--margin" fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            {/* Social media style is located in footer.scss */}
            <h6 className="social-media__title">Share this post:</h6>
            <ul className="social-media__list">
              <li className="social-media__link">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=https://the-final-frontier.netlify.app/${post.fields.slug}`} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="social-media__icon social-media__icon--color" />
                </a>
              </li>
              <li className="social-media__link">
                <a href={`https://twitter.com/intent/tweet/?text=${post.frontmatter.title}&url=https://the-final-frontier.netlify.app${post.fields.slug}`} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="social-media__icon social-media__icon--color" />
                </a>
              </li>
            </ul>
          </div>
        </Main>
        <Aside />
      </div>
    </Layout>
  )
}

// BlogPost.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       html: PropTypes.string.isRequired,
//       frontmatter: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//         tags: PropTypes.arrayOf(PropTypes.string.isRequired)
//       }),
//       fields: PropTypes.shape({
//         slug: PropTypes.string.isRequired,
//       }),
//       excerpt: PropTypes.string.isRequired,
//     }),
//   }),
// }

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        tags
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 590) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
      excerpt
    }
  }
`