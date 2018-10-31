import React from 'react'
// eslint-disable-next-line

import Helmet from 'react-helmet'

import Nav from './Nav'
import '../scss/main.scss'

const TemplateWrapper = ({ children }) => (
  <main id="mainWrapper">
    <Nav pageWrapId="wrapper" outerContainerId="mainWrapper" />
    <section id="wrapper">{children}</section>
  </main>
)

export default TemplateWrapper
