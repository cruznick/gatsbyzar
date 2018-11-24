/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'gatsby'

const stageLink = ({ stage }) => (
  <div className="stageLink">
    <div className="stageInfo">
      <Link to={`/montajes/${stage.slug}`}>
        <h4>{stage.title}</h4>
      </Link>
      <blockquote>{stage.description}</blockquote>
    </div>
  </div>
)

export default stageLink
