/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `22f178f5dc2438a9ca4bb214410a73`,
        preview: false,
        disableLiveReload: false,
      },
    },
  ],
}
