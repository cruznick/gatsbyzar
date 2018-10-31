import React from 'react'
import { Link } from 'gatsby'
import { scaleRotate as Menu } from 'react-burger-menu'

export default props => (
  // Pass on our props
  <Menu width="30%" {...props}>
    <Link to="/">
      <h3>Inicio</h3>
    </Link>
    <Link to="/about">
      <h3>Acerca</h3>
    </Link>
    <Link to="/blog">
      <h3>Blog</h3>
    </Link>
    <Link to="/repertorio">
      <h3>Repertorio</h3>
    </Link>
    <Link to="/contacto">
      <h3>Contacto</h3>
    </Link>
  </Menu>
)
