const fs = require('fs')
const {host, prefix, port} = JSON.parse(fs.readFileSync('./api.json'))

const webpack = require('webpack')

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'tifyjs',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
      // {rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/vuetify/dist/vuetify.min.css'}
    ]
  },
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/axios.js',
    '~/plugins/vue-lazyload.js',
    '~/plugins/filter.js'
  ],
  css: [
    '~/assets/style/app.styl'
  ],
  /*
   ** Customize the progress bar color
   */
  loading: {color: '#3B8070'},

  modules: [
    // With options
    // ['@nuxtjs/localtunnel', { subdomain: 'laizong' }]
    '@nuxtjs/axios'
  ],
  axios: {
    host,
    prefix,
    port
  },

  env: {
    API_SERVICE: `http://${host}:${port}`
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: [
      '~/plugins/vuetify.js',
      'lodash',
      'vue-lazyload'
    ],
    extractCSS: true,
    postcss: [],
    loaders: [
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ],
    /*
     ** Run ESLint on save
     */
    extend (config, ctx) {
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ]
  }
}
