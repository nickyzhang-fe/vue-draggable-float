module.exports = {
  env: {
    NODE_ENV: process.env.NODE_ENV || 'sit'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Decentralized Exchange Ecosystem',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Decentralized Exchange Ecosystem'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {src: '//static.blackfish.cn/lib/jquery/jquery-1.12.4.min.js'}
    ]
  },
  css: [
    {src: '~assets/less/index.less', lang: 'less'},
    {src: '~assets/libs/animate.css'}
  ],
  /*
   ** Customize the progress bar color
   */
  loading: {color: '#3B8070'},
  /*
   ** Build configuration
   */
  build: {
    // postcss: [
    //   require('postcss-px2rem')({
    //     remUnit: 75
    //   })
    // ],
    /*
     ** Run ESLint on save
     */
    extend (config, {isDev, isClient}) {
      if (isDev && isClient) {
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
