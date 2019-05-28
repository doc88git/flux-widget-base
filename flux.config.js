const path = require('path')
const pkg = require('./package')

require('dotenv').config()

module.exports = {
  srcDir: 'src/',

  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'app-info', name: pkg.name, content: pkg.version }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    {
      src: '@doc88/flux-style-guide/src/assets/f-style-guide.scss',
      lang: 'sass'
    },
    {
      src: '@/assets/scss/main.scss',
      lang: 'sass'
    }
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/style-guide'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: process.env.APP_API_URL
    // See https://github.com/nuxt-community/axios-module#options
  },

  oauth: {
    sessionName: `${pkg.name}@${pkg.version}`,
    secretKey: `${process.env.APP_API_CLIENT_SECRET}`, // Provide a secret key to sign the encrypted cookie. Do not leak this!
    oauthHost: process.env.APP_API_URL,
    oauthClientID: process.env.APP_API_CLIENT_ID,
    oauthClientSecret: process.env.APP_API_CLIENT_SECRET,
    onLogout: (req, res) => {
      // do something after logging out
      return { req, res }
    },
    fetchUser: (accessToken, request) => {
      // do something to return the user
      // const user = User.findByToken(accessToken, request)
      // return user
      return { accessToken, request }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['@doc88/flux-style-guide'],
    postcss: {
      plugins: {
        'postcss-url': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        cssnano: {
          preset: 'default',
          discardComments: { removeAll: true },
          zIndex: false
        },
        autoprefixer: {}
      },
      preset: {
        stage: 0,
        autoprefixer: {
          cascade: false,
          grid: true
        }
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
