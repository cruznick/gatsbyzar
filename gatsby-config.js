module.exports = {
  siteMetadata: {
    title: 'Zarambeques y Muecas',
    author: 'Benjamin J. Martinez',
    description: 'Compañí­a de Danza & Teatro',
    logo: 'src/img/logo2.png',
    fb: 'https://www.facebook.com/zarambequesymuecasdanza',
    twitter: 'https://www.twitter.com/zarambeques',
    instagram: 'https://www.instagram.com/zarambequesymuecas',
    youtube: 'https://www.youtube.com/channel/UCbw3g58jLWU1pSPAJC1ddCg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Old Standard TT:regular', 'Raleway:regular'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Zarambeques y Muecas',
        short_name: 'Z&M',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/img/logo2.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/static/img`,
          name: 'img',
        },
      },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [{
            resolve: `gatsby-remark-relative-images`,
              options: {
                name: 'img'
              }
            },
          {
            resolve: `gatsby-remark-images`,
              options: {},
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
