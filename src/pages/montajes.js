/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import NavLogo from '../components/NavLogo'
import StageLink from '../components/StageLink'

const MontajesPage = ({
  data: {
    StageQuery: { edges },
    MontajesQuery,
  },
  location,
}) => {
  const Stages = edges.map(edge => <StageLink key={edge.node.slug} stage={edge.node} />)
  return (
    <Layout>
      <Helmet>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>{MontajesQuery.title}</title>
        <meta name="description" content={MontajesQuery.description} />
        <meta name="image" content={MontajesQuery.image.file.url} />
        <meta property="og:url" content={`https://zarambeques.com${location.pathname}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={MontajesQuery.title} />
        <meta property="og:description" content={MontajesQuery.description} />
        <meta property="og:image" content={MontajesQuery.image.file.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={MontajesQuery.title} />
        <meta name="twitter:description" content={MontajesQuery.description} />
        <meta name="twitter:image" content={MontajesQuery.image.file.url} />
      </Helmet>
      <div className="contentWrapper">
        <div className="leftContent">
          <div className="titles">
            <div className="pageTitle">
              <div className="titleContent">
                <a href="#Montajes">
                  <h1>{MontajesQuery.title}</h1>
                </a>
              </div>
            </div>
          </div>
          <Img
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
            fluid={MontajesQuery.image.fluid}
          />
        </div>
        <div className="rightContent">
          <NavLogo />
          <div className="content">
            <div className="innerContent">
              <article
                id="Montajes"
                dangerouslySetInnerHTML={{ __html: MontajesQuery.body.childMarkdownRemark.html }}
              />
              <p>{MontajesQuery.description}</p>
              <div className="dividerSimple" />
              {Stages}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    MontajesQuery: contentfulPaginas(title: { eq: "Montajes" }) {
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
    StageQuery: allContentfulMontajes(sort: { order: DESC, fields: [title] }) {
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
export default MontajesPage
