import { pwa } from './config/pwa'

const isDev = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@vue-macros/nuxt'
  ],
  macros: {
    setupSFC: true,
    betterDefine: false,
    defineModels: false
  },
  css: [
    '@unocss/reset/tailwind.css'
  ],
  colorMode: {
    classSuffix: ''
  },
  routeRules: {
    '/**': isDev ? {} : { cache: { swr: true, maxAge: 120, staleMaxAge: 60, headersOnly: true } }
  },
  nitro: {
    routeRules: {
      '/**': { isr: false }
    }
  },
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/jpg', href: '/favicon.jpg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'dxh.me' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
      ]
    }
  },

  pwa,

  devtools: {
    enabled: true
  }
})
