/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import NavLogo from '../components/NavLogo'
import StaffLink from '../components/StaffLink'

const AboutPage = ({
  data: {
    StaffQuery: { edges },
    AboutQuery,
  },
  location,
}) => {
  const Staffs = edges.map(edge => <StaffLink key={edge.node.slug} staff={edge.node} />)
  return (
    <Layout>
      <Helmet>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>{AboutQuery.title}</title>
        <meta name="description" content={AboutQuery.description} />
        <meta name="image" content={AboutQuery.image.file.url} />
        <meta property="og:url" content={`https://zarambeques.com${location.pathname}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={AboutQuery.title} />
        <meta property="og:description" content={AboutQuery.description} />
        <meta property="og:image" content={AboutQuery.image.file.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={AboutQuery.title} />
        <meta name="twitter:description" content={AboutQuery.description} />
        <meta name="twitter:image" content={AboutQuery.image.file.url} />
      </Helmet>
      <div className="contentWrapper">
        <div className="leftContent">
          <div className="titles">
            <div className="pageTitle">
              <div className="titleContent">
                <a href="#Acerca">
                  <h1>{AboutQuery.title}</h1>
                </a>
              </div>
            </div>
          </div>
          <Img
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
            }}
            fluid={AboutQuery.image.fluid}
          />
        </div>
        <div className="rightContent">
          <NavLogo />
          <div className="content">
            <div className="innerContent">
              <div className="dividerSimple" />
              <article
                id="Acerca"
                dangerouslySetInnerHTML={{ __html: AboutQuery.body.childMarkdownRemark.html }}
              />
              <div className="dividerBrackets">Dirección</div>
              {Staffs}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    AboutQuery: contentfulPaginas(title: { eq: "Acerca" }) {
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
    StaffQuery: allContentfulDireccion(sort: { order: DESC, fields: [position] }) {
      edges {
        node {
          slug
          position
          description
          title
          image {
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
export default AboutPage
