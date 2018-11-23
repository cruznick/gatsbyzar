import React from 'react'
import { Link } from 'gatsby'
import { scaleRotate as Menu } from 'react-burger-menu'

export default props => (
  // Pass on our props
  <Menu width="50%" {...props}>
    <Link to="/">Inicio</Link>
    <Link to="/acerca">Acerca</Link>
    <Link to="/montajes">Montajes</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/contacto">Contacto</Link>
  </Menu>
)
