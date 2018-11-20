/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PostLink from '../components/PostLink'
import Layout from '../components/Layout'

const IndexPage = ({
  data: {
    PostQuery: { edges },
    BlogCover,
  },
}) => {
  const Posts = edges.map(edge => <PostLink key={edge.node.fields.slug} post={edge.node} />)

  return (
    <Layout>
      <div className="leftContent">
        <div className="titles">
          <div className="pageTitle">
            <div className="titleContent">
              <h1>Blog</h1>
            </div>
          </div>
          <Img
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
            fluid={BlogCover.childImageSharp.fluid}
            fadeIn
          />
        </div>
      </div>
      <div className="rightContent">
        <div className="content">
          <div className="innerContent">
            <div className="titleContent">
              <h2>Ultimas entradas:</h2>
            </div>
            {Posts}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const BlogQuery = graphql`
  query {
    PostQuery: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
    BlogCover: file(relativePath: { eq: "covers/BlogCover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
