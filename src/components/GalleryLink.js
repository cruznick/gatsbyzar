/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'gatsby'

const GalleryLink = ({ gallery }) => (
  <div className="galleryLink">
    <div className="galleryInfo">
      <Link to={`/galeria/${gallery.slug}`}>
        <h4>{gallery.title}</h4>
      </Link>
      <blockquote>{gallery.description}</blockquote>
    </div>
  </div>
)

export default GalleryLink
