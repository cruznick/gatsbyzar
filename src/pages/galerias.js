/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import NavLogo from '../components/NavLogo'
import GalleryLink from '../components/GalleryLink'

const GaleriasPage = ({
  data: {
    GalleryQuery: { edges },
    GaleriasQuery,
  },
  location,
}) => {
  const Galleries = edges.map(edge => <GalleryLink key={edge.node.slug} gallery={edge.node} />)
  return (
    <Layout>
      <Helmet>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>{GaleriasQuery.title}</title>
        <meta name="description" content={GaleriasQuery.description} />
        <meta name="image" content={GaleriasQuery.image.file.url} />
        <meta property="og:url" content={`https://zarambeques.com${location.pathname}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={GaleriasQuery.title} />
        <meta property="og:description" content={GaleriasQuery.description} />
        <meta property="og:image" content={GaleriasQuery.image.file.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={GaleriasQuery.title} />
        <meta name="twitter:description" content={GaleriasQuery.description} />
        <meta name="twitter:image" content={GaleriasQuery.image.file.url} />
      </Helmet>
      <div className="contentWrapper">
        <div className="leftContent">
          <div className="titles">
            <div className="pageTitle">
              <div className="titleContent">
                <a href="#Galerias">
                  <h1>{GaleriasQuery.title}</h1>
                </a>
              </div>
            </div>
          </div>
          <Img
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
            fluid={GaleriasQuery.image.fluid}
          />
        </div>
        <div className="rightContent">
          <NavLogo />
          <div className="content">
            <div className="innerContent">
              <article
                id="Galerias"
                dangerouslySetInnerHTML={{ __html: GaleriasQuery.body.childMarkdownRemark.html }}
              />
              <p>{GaleriasQuery.description}</p>
              <div className="dividerSimple" />
              {Galleries}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    GaleriasQuery: contentfulPaginas(title: { eq: "Galerias" }) {
      title
      slug
      description
      body {
        childMarkdownRemark {
          html
        }
      }
      image {
        file {
          url
        }
        fluid(maxWidth: 1280) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    GalleryQuery: allContentfulGaleria(sort: { order: DESC, fields: [title] }) {
      edges {
        node {
          slug
          description
          title
        }
      }
    }
  }
`
export default GaleriasPage
