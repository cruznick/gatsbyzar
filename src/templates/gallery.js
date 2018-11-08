/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import Lightbox from 'react-image-lightbox'
import Layout from '../components/Layout'

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lightbox: false,
    }
  }

  gotoPrevLightboxImage() {
    const { photo } = this.state
    this.setState({ photo: photo - 1 })
  }

  gotoNextLightboxImage() {
    const { photo } = this.state
    this.setState({ photo: photo + 1 })
  }

  openLightbox(photo, event) {
    event.preventDefault()
    this.setState({ lightbox: true, photo })
  }

  closeLightbox() {
    this.setState({ lightbox: false })
  }

  render() {
    const photos = this.props.data.markdownRemark.images
    const photoSrc = photos.map(photo => ({ srcSet: photos.image.childImageSharp.fluid.src }))

    return (
      <div>
        <div>
          {photos.map((photo, i) => (
            <a href={photo.childImageSharp.fluid.src} onClick={e => this.openLightbox(i, e)}>
              <Img key={i} className={classes.spacer} fluid={photo.childImageSharp.fluid} />
            </a>
          ))}
        </div>
        <Lightbox
          backdropClosesModal
          images={photoSrc}
          currentImage={photoSrc.photo}
          isOpen={this.state.lightbox}
          onClickPrev={() => this.gotoPrevLightboxImage()}
          onClickNext={() => this.gotoNextLightboxImage()}
          onClose={() => this.closeLightbox()}
        />
      </div>
    )
  }
}
export default Gallery

export const GalleryQuery = graphql`
  query photos($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        images {
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
