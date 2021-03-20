require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Daficco`,
    siteTitleAlt: `Daficco - The Nomad's Social Nexus`,
    siteUrl: `https://dafic.co`,
    siteDescription: `A social nexus for nomads.`,
    siteHeadline: `Daficco - The Nomad's Social Nexus`,
    siteImage: `/sticker.png`,
    siteLanguage: `en`,
    author: `Tom Tijerina`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Events`,
            slug: `/events`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Facebook`,
            url: `https://www.facebook.com/Daficco-102768448570113`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/daficco/`,
          },
          {
            name: `Reddit`,
            url: `https://www.reddit.com/u/daficco/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daficco - The Nomad's Social Nexus`,
        short_name: `Daficco`,
        description: `A way for nomads to find events to meetup with other nomads when they feel like being social.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`, 
        display: `standalone`,
        icons: [
          {
            src: `/sticker.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
