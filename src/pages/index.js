/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import { FiFacebook, FiInstagram, FiYoutube, FiTwitter } from 'react-icons/fi'
import { Helmet } from 'react-helmet'
import BackgroundSlider from '../components/test/index'
import Logo from '../img/logo2.png'
import Layout from '../components/Layout'
import Img1 from '../img/home/Slide-01.jpg'
import Img2 from '../img/home/Slide-02.jpg'
import Img3 from '../img/home/Slide-03.jpg'
import Img4 from '../img/home/Slide-04.jpg'
import Img5 from '../img/home/Slide-05.jpg'
import Img6 from '../img/home/Slide-06.jpg'
import Img7 from '../img/home/Slide-07.jpg'
import Img8 from '../img/home/Slide-08.jpg'
import Img9 from '../img/home/Slide-09.jpg'
import Img10 from '../img/home/Slide-10.jpg'

const MainIndex = ({ data, location }) => (
  <Layout>
    <Helmet>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="image" content={Logo} />
      <meta property="og:url" content={`https://zarambeques.com${location.pathname}`} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta property="og:description" content={data.site.siteMetadata.description} />
      <meta property="og:image" content={Logo} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.site.siteMetadata.title} />
      <meta name="twitter:description" content={data.site.siteMetadata.description} />
      <meta name="twitter:image" content={Logo} />
    </Helmet>
    <div className="contentWrapper">
      <div className="centerContent">
        <h1>{data.site.siteMetadata.title}</h1>
        <h2>{data.site.siteMetadata.description}</h2>
        <div className="socialLinks">
          <a target="_blank" rel="noopener noreferrer" href={data.site.siteMetadata.fb}>
            <FiFacebook className="svgFont" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={data.site.siteMetadata.youtube}>
            <FiYoutube className="svgFont" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={data.site.siteMetadata.twitter}>
            <FiTwitter className="svgFont" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={data.site.siteMetadata.instagram}>
            <FiInstagram className="svgFont" />
          </a>
        </div>
      </div>
      <BackgroundSlider
        images={[Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10]}
        duration={5}
        transition={3}
      />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        fb
        twitter
        youtube
        instagram
      }
    }
  }
`
export default MainIndex
