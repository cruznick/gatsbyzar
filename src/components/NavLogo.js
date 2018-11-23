/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo2.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className="smallLogoContainer">
        <Link to="/">
          <Img fluid={data.logo.childImageSharp.fluid} fadeIn />
        </Link>
      </div>
    )}
  />
)
