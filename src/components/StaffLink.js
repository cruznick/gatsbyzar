/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'gatsby'

const StaffLink = ({ staff }) => (
  <div className="staffLink">
    <div className="staffInfo">
      <h2>{staff.position}</h2>
      <Link to={`/staff/${staff.slug}`}>
        <h4>{staff.title}</h4>
      </Link>
    </div>
  </div>
)

export default StaffLink
