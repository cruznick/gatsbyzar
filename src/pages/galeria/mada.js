/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'
import GeneralWrapper from '../../components/GeneralWrapper'

const MadaGallery = ({ data }) => (
  <Layout>
    <GeneralWrapper>
      <Gallery photos={data.MadaImg.edges} />
    </GeneralWrapper>
  </Layout>
)

export const query = graphql`
  query {
    MadaImg: allFile(
      filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "mada" } }
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
export default MadaGallery
