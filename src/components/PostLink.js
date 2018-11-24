/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'gatsby'

const PostLink = ({ post }) => (
  <div className="postLink">
    <div className="postInfo">
      <Link to={`/blog/${post.slug}`}>
        <h4>{post.title}</h4>
      </Link>
      <p>{post.description}</p>
    </div>
  </div>
)

export default PostLink
