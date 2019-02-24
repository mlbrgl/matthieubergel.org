/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.onCreateNode = ({node, getNode, actions}) => {
  const { createNodeField } = actions
  if(node.internal.type === 'MarkdownRemark') {
    // Regex to remove the date in the parent folder name
    const pathElements = getNode(node.parent).relativeDirectory.match(/(.+\/)?(\d{8})?-?(.+)/)
    const slug = (pathElements[1] ? pathElements[1] : '') + pathElements[3]
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      // Start using dynamic template switching when at least one file uses the frontmatter template field.
      // Adapt GraphQL query above to retrieve frontmatter > template.
      // let template = node.frontmatter.template ? node.frontmatter.template : 'Article'
      // let component = path.resolve('src/components/' + template + '/' + template + '.js')
      createPage({
        path: node.fields.slug,
        // component: component,
        component: path.resolve('src/components/Article/Article.js'),
        context: {
          slug: node.fields.slug
        }
      })
    })
  })
}
