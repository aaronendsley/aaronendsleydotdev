const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
module.exports = {
  siteMetadata: {
    title: `AaronEndsley.Dev`,
    description: `The portfolio and and tech blog of Aaron Endsley`,
    author: `Aaron Endsley`,
    githubLink: `https://github.com/aaronendsley`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_ID,
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AaronEndsley.Dev`,
        short_name: `AaronEndsley.Dev`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#25b3b8`,
        display: `minimal-ui`,
        icon: `src/images/me.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
