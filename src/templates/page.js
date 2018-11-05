import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PageTemplate = ({ title, content, contentComponent, image }) => {
  const PageContent = contentComponent || Content

  return (
    <React.Fragment>
      <div className="leftContent">
        <div className="titles">
          <div className="pageTitle">
            <h2>{title}</h2>
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
      </div>
      <div className="rightContent">
        <PageContent className="content" content={content} />
      </div>
    </React.Fragment>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.object,
}

const Page = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image.childImageSharp}
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
        image {
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
