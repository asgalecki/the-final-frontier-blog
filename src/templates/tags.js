import React from 'react';
// import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import Layout from '../components/layout';
import Main from '../components/Main/Main';
import Aside from '../components/Aside/Aside';
import PostCard from '../components/Main/PostCard';

const Tags = ({ pageContext, data }) => {

  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  const { currentPage, tagPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === tagPages;
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextPage = currentPage === 1 ? `${kebabCase(tag)}/` + (currentPage + 1).toString() : (currentPage + 1).toString();

  return (
    <Layout>
      <div className="layout__container">
        <Main>
          <PostCard posts={edges} tagHeader={tagHeader}>
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

// Tags.propTypes = {
//   pageContext: PropTypes.shape({
//     tag: PropTypes.string.isRequired,
//   }),
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       totalCount: PropTypes.number.isRequired,
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//               title: PropTypes.string.isRequired,
//             }),
//             fields: PropTypes.shape({
//               slug: PropTypes.string.isRequired,
//             }),
//           }),
//         }).isRequired
//       ),
//     }),
//   }),
// }

export default Tags;

export const query = graphql`
  query($tag: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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