import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import Main from '../components/Main/Main';
import Aside from '../components/Aside/Aside';
import PostCard from '../components/Main/PostCard';

const BlogList = ({ pageContext, data }) => {
  
  const { edges } = data.allMarkdownRemark;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextPage = currentPage === 1 ? "blog/" + (currentPage + 1).toString() : (currentPage + 1).toString();

  return (
    <Layout>
      <div className="layout__container">
        <Main>
          <PostCard posts={edges}>
            <div className="pagination">
              {!isFirst &&
                <Link to={`../${prevPage}`} rel="prev">
                  <button className="pagination__button">← Newer</button>
                </Link>
              }
              {!isLast &&
                <Link to={`../${nextPage}`} rel="next">
                  <button className="pagination__button">Older →</button>
                </Link>
              }
            </div>
          </PostCard>
        </Main>
        <Aside />
      </div>
    </Layout>
  )
}

export default BlogList;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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