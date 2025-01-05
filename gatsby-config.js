module.exports = {
  siteMetadata: {
    title: `Ben Schulz`,
    description: `This is the portfolio of Benjamin Schulz.`,
    author: `Benjamin Schulz`,
    siteUrl: `https://benschulz.dev`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `benjamin-schulz-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/site-icon.ico`, // This path is relative to the root of the site.
      },
    },
  ],
};
