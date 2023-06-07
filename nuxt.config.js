import axios from "axios";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blogger',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href:'https://fonts.googleapis.com/css?family=Montserrat' }
    ]
  },
  // Animation
  transition : {
    name: 'fade',
    mode: 'out-in'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/scss/main.scss', lang : 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/app-component.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: [
      'vue',
      'axios'
    ]
  },

  // Generate
  generate: {
    routes: function() {
      return axios.get('https://blog-70308-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
        .then((res) => {
          const postsArray=[]
          for(let key in res.data){
            postsArray.push({...res.data[key], id:key})
          }
          return postsArray.map((post) => {
            return '/blog' + post.id
          })
        })
    }
  }
}
