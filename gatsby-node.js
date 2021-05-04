/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

async function turnBlogPostsIntoPages({ graphql, actions }) {
  const postsTemplate = path.resolve('./src/templates/Posts.js');
  const { data } = await graphql(`
    query {
      blogs: allSanityBlogPost {
        nodes {
          postSlug {
            current
          }
          postTitle
          _rawPostContent
        }
      }
    }
  `);

  data.blogs.nodes.forEach(blog => {
    console.log(
      `creating page for the blog post called ${blog.postSlug.current}`
    );
    actions.createPage({
      // what is the url for this new page
      path: `blog/${blog.postSlug.current}`,
      component: postsTemplate,
      context: {
        slug: blog.postSlug.current,
        title: blog.postTitle,
        content: blog._rawPostContent,
      },
    });
  });
}

exports.createPages = async function createPages(params) {
  // Create pages dynamically
  // wait for all promises to be resolved before finishing this function
  await Promise.all([turnBlogPostsIntoPages(params)]);
};
