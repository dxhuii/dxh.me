import { pwa } from './config/pwa'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  modules: ['@unocss/nuxt', '@nuxtjs/color-mode', '@vite-pwa/nuxt'],

  css: ['@unocss/reset/tailwind.css', '~/assets/css/main.css'],

  devtools: { enabled: false },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
    storageKey: 'dxh-me-color-mode',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      title: 'dxh',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: 'dxh 的个人网站，NodeJS Full Stack Developer。' },
        { name: 'author', content: 'dxh' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-title', content: 'dxh.me' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/pwa-192x192.png' },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  pwa,
})
