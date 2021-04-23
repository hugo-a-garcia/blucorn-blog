module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `BlueCorn`,
    // Used to provide alt text for your avatar
    author: `Hugo A. Garcia`,
    // Used for SEO
    description: `A Journey into Robotics`,
    // Used for resolving images in social cards
    siteUrl: `https://bluecorn.dev`,
    // Used for social links in the root footer
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/bluecorn`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
        prismPreset: `prism-okaidia`,
      },
    },
  ],
}