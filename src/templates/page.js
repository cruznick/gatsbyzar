import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PageTemplate = ({ title, content, contentComponent, cover }) => {
  const PageContent = contentComponent || Content

  return (
    <React.Fragment>
      <Helmet title={`${title}`} />
      <div className="leftContent">
        <div className="titles">
          <div className="pageTitle">
            <div className="titleContent">
              <h2>{title}</h2>
            </div>
          </div>
          <Img
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
            fluid={cover.fluid}
          />
        </div>
      </div>
      <div className="rightContent">
        <div className="content">
          <PageContent className="innerContent" content={content} />
        </div>
      </div>
    </React.Fragment>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  cover: PropTypes.object,
}

const Page = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        cover={post.frontmatter.cover.childImageSharp}
      />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const PageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        cover {
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
