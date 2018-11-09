/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PostLink from '../components/postlink'
import Layout from '../components/Layout'

export const RepTemplate = ({ posts, repcover }) => (
  <>
    <section className="contentWrapper">
      <div className="leftContent">
        <div className="titles">
          <div className="page Title">
            <h1>Repertorio</h1>
            <Img
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
              }}
              fluid={repcover.fluid}
            />
          </div>
        </div>
      </div>
      <div className="rightContent">{Posts}</div>
    </section>
  </>
)

const RepPage = ({ data }) => {
  const PostIndex = data.posts.allMarkdownRemark
  const repcover = data.repcover.childImageSharp
  const Posts = PostIndex.edges.map(edge => (
    <PostLink key={edge.node.fields.slug} post={edge.node} />
  ))
  return (
    <Layout>
      <RepTemplate>Po</RepTemplate>
    </Layout>
  )
}

// // const IndexPage = ({
//   data: {
//     allMarkdownRemark: { edges },
//   },
// }) => {
//   const Posts = edges.map(edge => <PostLink key={edge.node.fields.slug} post={edge.node} />)

//   return (
//     <Layout>
//       <section className="contentWrapper">
//         <div className="leftContent">
//           <div className="titles">
//             <div className="pageTitle">
//               <h1>Repertorio</h1>
//               <Img
//                 style={{
//                   position: 'absolute',
//                   left: 0,
//                   top: 0,
//                   width: '100%',
//                   height: '100%',
//                 }}
//                 fluid={data.repcover.gatsbyImageSharpFluid}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="rightContent">{Posts}</div>
//       </section>
//     </Layout>
//   )
// }

// export default IndexPage

export const RepQuery = graphql`
  query {
    post: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] }
      filter: { frontmatter: { templateKey: { eq: "page" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            description
          }
        }
      }
    }
    repcover: file(relativePath: { eq: "covers/rep-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
