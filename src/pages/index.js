import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FaFacebook, FaInstagram, FaYoutubeSquare, FaTwitterSquare } from 'react-icons/fa'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
            fb
            twitter
            youtube
            instagram
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Helmet title={data.site.siteMetadata.title} />
        <section className="contentWrapper">
          <h1>{data.site.siteMetadata.title}</h1>
          <h2>{data.site.siteMetadata.description}</h2>
        </section>
        <div className="socialLinks">
          <a target="_blank" rel="noopener noreferrer" href={data.site.siteMetadata.fb}>
            <FaFacebook size={50} color="black" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={data.site.siteMetadata.youtube}>
            <FaYoutubeSquare size={50} color="black" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={data.site.siteMetadata.twitter}>
            <FaTwitterSquare size={50} color="black" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={data.site.siteMetadata.instagram}>
            <FaInstagram size={50} color="black" />
          </a>
        </div>
      </Layout>
    )}
  />
)
