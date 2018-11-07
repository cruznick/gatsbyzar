import React from 'react'
import Lightbox from 'react-images'
import PropTypes from 'prop-types'

const ImageGallery = ({ imgSrc, imgSrcSet }) => {
  const imgSet = [
    {
      src: imgSrc,
      srcSet: imgSrcSet,
    },
  ]
  <Lightbox
    images={imgSet}
    isOpen={this.state.lightboxIsOpen}
    onClickPrev={this.gotoPrevious}
    onClickNext={this.gotoNext}
    onClose={this.closeLightbox}
  />

}

export default ImageGallery

ImageGallery.propTypes = {
  imgSrc: PropTypes.array,
  imgSrcSet: PropTypes.array,
}
