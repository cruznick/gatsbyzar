/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
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
