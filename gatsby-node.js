const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/components/globals/templates/blog.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(filter: { fileAbsolutePath: { regex: "/resources/" } }) {
          nodes {
            body
            slug
            frontmatter {
              author
              title
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMdx.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      createPage({
        path: post.slug,
        component: blogPost,
        context: {
          post
        }
      })
    })
  }
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.mediaType === "text/markdown") {
    const slug = `${node.relativeDirectory}/${node.name}`
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}
