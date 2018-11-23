/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import NavLogo from '../components/NavLogo'

const ContactPage = ({ data, location }) => {
  const { title, description, image, body } = data.contentfulPaginas
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
                <a href="#Contacto">
                  <h1>{title}</h1>
                </a>
              </div>
            </div>
          </div>
          <Img
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
            fluid={image.fluid}
          />
        </div>
        <div className="rightContent">
          <NavLogo />
          <div className="content">
            <div className="innerContent">
              <article
                id="Contacto"
                dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
              />
              <div className="dividerSimple" />
              <form action="//formspree.io/contacto@zarambeques.com" method="POST">
                <label htmlFor="name">
                  <input type="text" placeholder="Nombre" name="name" />
                </label>
                <label htmlFor="_replyto">
                  <input
                    type="email"
                    placeholder="Tu email ... ejemplo@domain.com"
                    name="_replyto"
                  />
                </label>
                <label htmlFor="message">
                  <textarea c name="message" rows="3" placeholder="Mensaje" />
                </label>
                <input type="hidden" name="_subject" value="Message via http://domain.com" />
                <button className="svgFont" type="submit">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    contentfulPaginas(title: { eq: "Contacto" }) {
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
  }
`
export default ContactPage
