/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'

const Contacto = ({ data }) => (
  <Layout>
    <div className="leftContent">
      <div className="titles">
        <div className="pageTitle">
          <div className="titleContent">
            <h1>Contacto</h1>
          </div>
        </div>
        <Img
          style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
          fluid={data.file.childImageSharp.fluid}
          fadeIn
        />
      </div>
    </div>
    <div className="rightContent">
      <div className="content">
        <div className="innerContent">
          <form action="//formspree.io/contacto@zarambeques.com" method="POST">
            <label htmlFor="name">
              <input type="text" placeholder="Nombre" name="name" />
            </label>
            <label htmlFor="_replyto">
              <input type="email" placeholder="Tu email ... ejemplo@domain.com" name="_replyto" />
            </label>
            <label htmlFor="message">
              <textarea c name="message" rows="3" placeholder="Mensaje" />
            </label>
            <input type="hidden" name="_subject" value="Message via http://domain.com" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contacto

export const ContactQuery = graphql`
  query {
    file(relativePath: { eq: "covers/RepCover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
