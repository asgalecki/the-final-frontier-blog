import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Main from '../components/Main/Main';
import Aside from '../components/Aside/Aside';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="layout__container">
        <Main>
          <div className="main__container">
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            {/* Social media style is located in footer.scss */}
            <h6 className="social-media__title">Share this post:</h6>
            <ul className="social-media__list">
              <li className="social-media__link">
                <a href="/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} className="social-media__icon social-media__icon--color" />
                </a>
              </li>
              <li className="social-media__link">
                <a href="/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="social-media__icon social-media__icon--color" />
                </a>
              </li>
              <li className="social-media__link">
                <a href="/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="social-media__icon social-media__icon--color" />
                </a>
              </li>
              <li className="social-media__link">
                <a href="/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebookMessenger} className="social-media__icon social-media__icon--color" />
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

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`