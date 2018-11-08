/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import PostLink from '../components/postlink'
import Layout from '../components/Layout'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map(edge => <PostLink key={edge.node.fields.slug} post={edge.node} />)

  return <Layout>{Posts}</Layout>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] }
      filter: { frontmatter: { templateKey: { eq: "page" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            description
          }
        }
      }
    }
  }
`
