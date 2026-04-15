// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: [
    '~/assets/css/main.css',
  ],
  googleFonts: {
    families: {
      'Familjen Grotesk': ['400', '500', '600', '700'],
      "Oswald": ['300','400', '500', '600', '700']
    }
  }
})