import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import { FiImage } from 'react-icons/fi'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ModalYoutube from '../components/ModalYoutube'
import GeneralWrapper from '../components/GeneralWrapper'

export const PageTemplate = ({ title, content, contentComponent, cover, ytId, gallery }) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <Helmet title={`${title}`} />
      <div className="leftContent">
        <div className="titles">
          <div className="pageTitle">
            <div className="titleContent">
              <h2>{title}</h2>
              <div className="innerLinks">
                <GeneralWrapper>
                  <ModalYoutube video={ytId} />
                  <button type="button" className="ytButton">
                    <Link to={`/galeria/${gallery}`}>
                      <FiImage className="svgFont" />
                    </Link>
                  </button>
                </GeneralWrapper>
              </div>
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
    </>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  cover: PropTypes.object,
  ytId: PropTypes.string,
  gallery: PropTypes.string,
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
        ytId={post.frontmatter.ytId}
        gallery={post.frontmatter.gallery}
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
        ytId
        gallery
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
