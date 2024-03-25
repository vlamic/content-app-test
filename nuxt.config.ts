// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [ '@nuxt/content', '@nuxtjs/i18n' ],
  content: {
    locales:[
      'es', 'en'
    ],
    defaultLocale: 'es'
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: false,
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'es',
        iso: 'es-ES',
        name: 'ES',
        isCatchallLocale: true
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'EN'
      }
    ],
    defaultLocale: 'es'
  }
})
