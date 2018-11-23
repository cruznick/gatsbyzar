/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import NavLogo from '../components/NavLogo'

const StaffTemplate = ({ data, location }) => {
  const { title, description, body, image, position } = data.contentfulDireccion

  return (
    <Layout>
      <Helmet>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image.file.url} />
        <meta property="og:url" content={`https://zarambeques.com${location.pathname}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image.file.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image.file.url} />
      </Helmet>
      <div className="contentWrapper">
        <div className="leftContent">
          <div className="titles">
            <div className="pageTitle">
              <div className="titleContent">
                <a href="#Content">
                  <h1>{title}</h1>
                </a>
                <p>{description}</p>
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
            fluid={image.fluid}
          />
        </div>
        <div className="rightContent">
          <NavLogo />
          <div className="content" id="Content">
            <div className="innerContent">
              <div className="date">{position}</div>
              <article dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulDireccion(slug: { eq: $slug }) {
      slug
      title
      position
      description
      image {
        file {
          url
        }
        fluid(maxWidth: 1280) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
export default StaffTemplate
