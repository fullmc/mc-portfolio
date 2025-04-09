// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from 'nuxt-config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  colorMode: {
    classSuffix: '',
  },
  googleFonts: {
    families: {
      'Poppins': true,
    },
  },

  modules: [
    '@nuxtjs/tailwindcss', // active tailwindcss
    '@nuxtjs/color-mode', // active le mode couleur
    '@nuxtjs/google-fonts', // active google fonts
    '@nuxtjs/i18n', // active i18n pour les traductions
    'shadcn-nuxt'
  ],
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'fr',
        iso: 'fr',
        name: 'Français',
        file: 'fr.json'
      },
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en-GB.json'
      }
    ],
    defaultLocale: 'fr',
    vueI18n: 'fr'
  },
  shadcn: {

    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  css: [
    'primeicons/primeicons.css',
  ],
})
