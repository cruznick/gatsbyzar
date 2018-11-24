/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import NavLogo from '../components/NavLogo'
import PostLink from '../components/PostLink'

const BlogPage = ({
  data: {
    PostQuery: { edges },
    BlogQuery,
  },
  location,
}) => {
  const Posts = edges.map(edge => <PostLink key={edge.node.slug} post={edge.node} />)
  return (
    <Layout>
      <Helmet>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>{BlogQuery.title}</title>
        <meta name="description" content={BlogQuery.description} />
        <meta name="image" content={BlogQuery.image.file.url} />
        <meta property="og:url" content={`https://zarambeques.com${location.pathname}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={BlogQuery.title} />
        <meta property="og:description" content={BlogQuery.description} />
        <meta property="og:image" content={BlogQuery.image.file.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={BlogQuery.title} />
        <meta name="twitter:description" content={BlogQuery.description} />
        <meta name="twitter:image" content={BlogQuery.image.file.url} />
      </Helmet>
      <div className="contentWrapper">
        <div className="leftContent">
          <div className="titles">
            <div className="pageTitle">
              <div className="titleContent">
                <a href="#Blog">
                  <h1>{BlogQuery.title}</h1>
                </a>
              </div>
            </div>
          </div>
          <Img
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
            fluid={BlogQuery.image.fluid}
          />
        </div>
        <div className="rightContent">
          <NavLogo />
          <div className="content">
            <div className="innerContent">
              <article
                id="Blog"
                dangerouslySetInnerHTML={{ __html: BlogQuery.body.childMarkdownRemark.html }}
              />
              <p>{BlogQuery.description}</p>
              <div className="dividerSimple" />
              {Posts}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    BlogQuery: contentfulPaginas(title: { eq: "Blog" }) {
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
    PostQuery: allContentfulBlog(sort: { order: DESC, fields: [date] }) {
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
export default BlogPage
