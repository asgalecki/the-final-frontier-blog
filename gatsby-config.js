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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
        fluid: {
          srcSetBreakpoints: [ 280, 360, 575, 767, 991, 1199 ]
        }
      },
    },
  ],
}
