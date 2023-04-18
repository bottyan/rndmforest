export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/rndmforest/',
    //base: '/',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'hu main',
        path: '/hu',
        component: resolve(__dirname, 'pages/index.vue')
      });
      routes.push({
        name: 'hu pricing',
        path: '/hu/pricing',
        component: resolve(__dirname, 'pages/pricing.vue')
      });
      routes.push({
        name: 'hu privacy policy',
        path: '/hu/privacy-policy',
        component: resolve(__dirname, 'pages/privacy_policy.vue')
      });
      routes.push({
        name: 'old privacy policy',
        path: '/privacy-policy',
        component: resolve(__dirname, 'pages/privacy_policy.vue')
      });
      routes.push({
        name: 'non existing wordpredd plugin page',
        path: '/wordpress-plugin',
        component: resolve(__dirname, 'pages/index.vue')
      });
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dialogity Chat',
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
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/ScrollMagic.js', mode: 'client' },
    { src: '~/plugins/DialogityForm.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-gsap-module',
    '@nuxtjs/device',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // modul configs
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    }
  },

  googleAnalytics: {
    id: 'UA-155074630-1'
  },


}