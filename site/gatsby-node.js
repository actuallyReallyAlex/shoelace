// const path = require('path')

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const methodTemplate = path.resolve('./src/templates/method.js')
//   const methodRes = await graphql(`
//     query {
//       allMethodsJson {
//         edges {
//           node {
//             name
//             parameters {
//               name
//               description
//               required
//               type
//             }
//             description
//             returns {
//               description
//               type
//             }
//             since
//             usage
//           }
//         }
//       }
//     }
//   `)

//   methodRes.data.allMethodsJson.edges.forEach(edge => {
//     createPage({
//       component: methodTemplate,
//       path: `/methods/${edge.node.name}`,
//       context: {
//         description: edge.node.description,
//         parameters: edge.node.parameters,
//         name: edge.node.name,
//         returns: edge.node.returns,
//         since: edge.node.since,
//         usage: edge.node.usage
//       }
//     })
//   })
// }
