/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const BlogPostTemplate = ({ data, location }) => {
  const { title, description, body, image } = data.contentfulBlog

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
      <div className="postContentWrapper">
        <div className="postCenterContent">
          <h1>{title}</h1>
          <p>{description}</p>
          <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      slug
      title
      description
      image {
        file {
          url
        }
      }
    }
  }
`
export default BlogPostTemplate
