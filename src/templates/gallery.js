/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Gallery from '../components/Gallery'
import GeneralWrapper from '../components/GeneralWrapper'

const GalleryTemplate = ({ data, location }) => {
  const { title, description, gallery, image } = data.contentfulGaleria

  return (
    <Layout>
      <Helmet>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image.file.url} />
        <meta property="og:url" content={`https://zarambeques.com${location.pathname}`} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image.file.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image.file.url} />
      </Helmet>
      <GeneralWrapper>
        <Gallery photos={gallery} />
      </GeneralWrapper>
    </Layout>
  )
}

export const GalleryQuery = graphql`
  query($slug: String!) {
    contentfulGaleria(slug: { eq: $slug }) {
      slug
      title
      description
      image {
        file {
          url
        }
      }
      gallery {
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default GalleryTemplate
