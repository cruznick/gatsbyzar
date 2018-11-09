/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'
import WrapperGallery from '../../components/GalleryWrapper'

const MadaGallery = ({ data }) => (
  <Layout>
    <WrapperGallery>
      <Gallery photos={data.MadaImg.edges} />
    </WrapperGallery>
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
