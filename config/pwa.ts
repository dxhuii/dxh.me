import process from 'node:process'

import type { ModuleOptions } from '@vite-pwa/nuxt'

const scope = '/'

export const pwa: ModuleOptions = {
  registerType: 'autoUpdate',
  scope,
  base: scope,
  injectRegister: 'auto',
  manifest: {
    id: scope,
    scope,
    name: 'dxh.me',
    short_name: 'dxh',
    description: 'dxh 的个人网站 · NodeJS Full Stack Developer',
    lang: 'zh-CN',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    theme_color: '#0b0d12',
    background_color: '#0b0d12',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'maskable-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2,txt}'],
    navigateFallback: '/',
    cleanupOutdatedCaches: true,
  },
  registerWebManifestInRouteRules: true,
  writePlugin: true,
  devOptions: {
    enabled: process.env.VITE_PLUGIN_PWA === 'true',
    navigateFallback: scope,
  },
}
