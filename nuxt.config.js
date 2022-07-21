export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-website',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/firebase'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  firebase: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: 'my-website-48b57.firebaseapp.com',
      projectId: 'my-website-48b57',
      storageBucket: 'my-website-48b57.appspot.com',
      messagingSenderId: '1038533638770',
      appId: '1:1038533638770:web:680530fa750bb084ce60eb',
      measurementId: 'G-4ZVQ51K2PK'
    },
    services: {
      auth: {
        persistence: 'local'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Needed or exception thrown (https://github.com/nuxt-community/tailwindcss-module/issues/480)
  devServerHandlers: [],

  // Do not reload when non-functional files change
  watchers: {
    webpack: {
      ignored: [
        '**/.git/**'
      ]
    }
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
  privateRuntimeConfig: {
    adminUID: process.env.ADMIN_UID,
    firebaseKey: process.env.FIREBASE_API_KEY
  }
}
