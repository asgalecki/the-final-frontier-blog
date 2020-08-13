import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';

import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Main from '../components/Main/Main';
import Aside from '../components/Aside/Aside';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
    <Layout>
      <div className="layout__container">
        <Main>
          <div className="main__container">
          <h1>Tags</h1>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
          </div>
        </Main>
        <Aside />
      </div>
    </Layout>

)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`