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
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      // Needed to avoid 'Cannot use import statement outside a module error' (https://nuxtjs.org/docs/directory-structure/plugins/)
      'vue-icon-packs/hi',
      'vue-icon-packs/ri'
    ],
    extend (config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'raw-loader'
      })
    }
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
  }
}
