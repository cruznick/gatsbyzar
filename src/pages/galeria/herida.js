/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'
import GeneralWrapper from '../../components/GeneralWrapper'

const HeridaGallery = ({ data }) => (
  <Layout>
    <GeneralWrapper>
      <Gallery photos={data.HeridaImg.edges} />
    </GeneralWrapper>
  </Layout>
)

export const query = graphql`
  query {
    HeridaImg: allFile(
      filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "herida" } }
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
export default HeridaGallery
