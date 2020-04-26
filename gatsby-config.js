const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: `Maine COVID-19 Data`,
    description: `Compilation of data from Maine CDC, US CDC, NYTimes, and Portland Press Herald about COVID-19 in Maine.`,
    author: `@BerkeleyAlmand`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maine COVID-19 Data`,
        short_name: `mecovid19data`,
        start_url: `/`,
        icon: `src/images/maine-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
  developMiddleware: app => {
    app.use(
      "/plot",
      createProxyMiddleware({
        target: "http://localhost:5000",
        pathRewrite: {
          "/plot": "",
        },
      })
    )
  },
}
