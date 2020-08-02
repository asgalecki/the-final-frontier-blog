module.exports = {
  siteMetadata: {
    title: "The Final Frontier",
    description: "Astronomy Blog",
    author: "Artur Gałecki"
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
