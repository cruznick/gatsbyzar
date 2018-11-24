/* eslint-disable array-callback-return */
/* eslint-disable no-console */
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadBlog = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlog {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      result.data.allContentfulBlog.edges.map(({ node }) => {
        createPage({
          path: `blog/${node.slug}/`,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadStaff = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulDireccion {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      result.data.allContentfulDireccion.edges.map(({ node }) => {
        createPage({
          path: `staff/${node.slug}/`,
          component: path.resolve(`./src/templates/staff.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadStage = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulMontajes {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      result.data.allContentfulMontajes.edges.map(({ node }) => {
        createPage({
          path: `montajes/${node.slug}/`,
          component: path.resolve(`./src/templates/stage.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadGallery = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulGaleria {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      result.data.allContentfulGaleria.edges.map(({ node }) => {
        createPage({
          path: `galeria/${node.slug}`,
          component: path.resolve(`./src/templates/gallery.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadBlog, loadStaff, loadStage, loadGallery])
}
