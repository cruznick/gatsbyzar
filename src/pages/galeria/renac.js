/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'
import GeneralWrapper from '../../components/GeneralWrapper'

const RenacGallery = ({ data }) => (
  <Layout>
    <GeneralWrapper>
      <Gallery photos={data.RenacImg.edges} />
    </GeneralWrapper>
  </Layout>
)

export const query = graphql`
  query {
    RenacImg: allFile(
      filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "renac" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default RenacGallery
