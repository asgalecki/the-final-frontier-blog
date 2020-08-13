import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Main from '../components/Main/Main';
import Aside from '../components/Aside/Aside';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="layout__container">
        <Main>
          <div className="main__container">
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
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