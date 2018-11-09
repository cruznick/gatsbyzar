/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PostLink from '../components/PostLink'
import Layout from '../components/Layout'

const IndexPage = ({
  data: {
    AboutQuery: { edges },
    AboutCover,
  },
}) => {
  const Posts = edges.map(edge => <PostLink key={edge.node.fields.slug} post={edge.node} />)

  return (
    <Layout>
      <div className="leftContent">
        <div className="titles">
          <div className="pageTitle">
            <div className="titleContent">
              <h1>Acerca</h1>
              <p>
                1998 es el punto de partida de la compañía, toma su nombre de una danza popular
                novohispana, sus quehaceres coreográficos pretenden concentrarse en el enorme bagaje
                cultural que ha conformado la danza en el pasado y crear una propuesta escénica en
                el presente para construirnos entendiendo quienes somos evocando lo que era para no
                olvidar.
              </p>
            </div>
          </div>
          <Img
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
            fluid={AboutCover.childImageSharp.fluid}
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

export const AboutQuery = graphql`
  query {
    AboutQuery: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] }
      filter: { frontmatter: { templateKey: { eq: "dir-page" } } }
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
    AboutCover: file(relativePath: { eq: "covers/AboutCover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
