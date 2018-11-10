/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react'

const ImagesSlider = ({ slide }) => (
  <React.Fragment>{slide.childImageSharp.fixed.src}</React.Fragment>
)

export default ImagesSlider
