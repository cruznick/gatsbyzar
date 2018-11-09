/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PostLink from '../components/PostLink'
import Layout from '../components/Layout'

const IndexPage = ({
  data: {
    PostQuery: { edges },
    RepCover,
  },
}) => {
  const Posts = edges.map(edge => <PostLink key={edge.node.fields.slug} post={edge.node} />)

  return (
    <Layout>
      <div className="leftContent">
        <div className="titles">
          <div className="pageTitle">
            <div className="titleContent">
              <h1>Repertorio</h1>
            </div>
          </div>
          <Img
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
            fluid={RepCover.childImageSharp.fluid}
            fadeIn
          />
        </div>
      </div>
      <div className="rightContent">
        <div className="content">
          <div className="innerContent">{Posts}</div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const RepQuery = graphql`
  query {
    PostQuery: allMarkdownRemark(
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
    RepCover: file(relativePath: { eq: "covers/RepCover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
