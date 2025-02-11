// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  colorMode: {
    classSuffix: '',
  },
  
  modules: [
    '@nuxtjs/tailwindcss', // active tailwindcss
    '@nuxtjs/color-mode', // active le mode couleur
  ],
})
