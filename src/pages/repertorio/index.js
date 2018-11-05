import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/Layout'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        bgImg: file(relativePath: { eq: "repertorio.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Img fluid={data.bgImg.childImageSharp.fluid} />
      </Layout>
    )}
  />
)
