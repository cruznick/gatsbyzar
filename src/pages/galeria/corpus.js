/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'
import GeneralWrapper from '../../components/GeneralWrapper'

const CorpusGallery = ({ data }) => (
  <Layout>
    <GeneralWrapper>
      <Gallery photos={data.CorpusImg.edges} />
    </GeneralWrapper>
  </Layout>
)

export const query = graphql`
  query {
    CorpusImg: allFile(
      filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "corpus" } }
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
export default CorpusGallery
