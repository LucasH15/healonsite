require('dotenv').config({
  path: `.env`
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `healonsite`,
    siteUrl: `https://www.yourdomain.tld`
  },
  trailingSlash: 'never',
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        'projectId': process.env.SANITY_STUDIO_PROJECT_ID,
        'dataset': process.env.SANITY_STUDIO_DATASET
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `El Messiri`,
          `Nunito`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`fr`, `en`],
        defaultLanguage: `fr`,
        redirect: true
      },
    },
    'gatsby-plugin-image', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp']
}
