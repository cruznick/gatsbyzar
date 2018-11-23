/* eslint-disable max-len */
require(`dotenv`).config({ path: `.env` })

module.exports = {
  siteMetadata: {
    title: 'Zarambeques y Muecas',
    author: 'Benjamin J. Martinez',
    description: 'Compañía de Danza & Teatro',
    logo: 'src/img/logo2.png',
    fb: 'https://www.facebook.com/zarambequesymuecasdanza',
    twitter: 'https://www.twitter.com/zarambeques',
    instagram: 'https://www.instagram.com/zarambequesymuecas',
    youtube: 'https://www.youtube.com/channel/UCbw3g58jLWU1pSPAJC1ddCg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-zopfli',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Zarambeques & Muecas',
        short_name: 'Z & M',
        start_url: '/',
        background_color: '#3d1621',
        theme_color: '#3d1621',
        display: 'minimal-ui',
        icon: 'src/img/logo2.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID, // space id here
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN, // access token here
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images-grid',
            options: {
              className: 'imgGrid',
              gridGap: '20px',
              margin: '20px auto',
            },
          },
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 400,
              linkImagesToOriginal: true,
              withWebp: true,
              quality: 70,
            },
          },
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
  ],
}
