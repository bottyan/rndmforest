// https://nuxt.com/docs/api/configuration/nuxt-config
// TODO: check modules https://nuxt.com/modules?category=Extensions
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/google-fonts',
        '@nuxtjs/tailwindcss',
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
        documentDriven: true,
    },
    ssr: false,
    nitro: {
        preset: 'service-worker'
    },
    googleFonts: {
        families: {
            // https://themeisle.com/blog/best-google-fonts/#gref
            Roboto: true,
            'Josefin+Sans': true,
            'Merriweather': true,
            Lora: true,
            'Playfair Display': true,
            'Indie Flower': true,
            'Open Sans': true,
            Anton: true,
            Lato: [100, 300],
            Raleway: true,
        }
    },
    css: [
        '~/assets/css/default.scss'
    ]
})
