// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/google-fonts',
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
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
            Raleway: {
                wght: [100, 400],
                ital: [100]
            },
        }
    }
})
