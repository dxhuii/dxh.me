<script setup lang="ts">
const color = useColorMode()

useHead({
  meta: [
    {
      name: 'theme-color',
      content: () => (color.value === 'dark' ? '#0b0d12' : '#f3f4f7'),
    },
  ],
})

/** 开发环境自愈：注销历史遗留的 Service Worker，并清掉它留下的 Workbox 缓存 */
async function clearLegacyServiceWorker() {
  const registrations = await navigator.serviceWorker.getRegistrations()
  await Promise.all(registrations.map((registration) => registration.unregister()))

  if (!('caches' in window)) return
  const keys = await caches.keys()
  await Promise.all(
    keys.filter((key) => key.startsWith('workbox-')).map((key) => caches.delete(key)),
  )
}

onMounted(() => {
  // 只在开发环境做：生产环境的 SW 是正常注册的，不能注销。
  // 旧 SW 会一直拦截 /sw.js、/manifest.webmanifest 等请求并触发路由告警刷屏。
  if (!import.meta.dev || !('serviceWorker' in navigator)) return
  clearLegacyServiceWorker().catch(() => {})
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right, #6366f1, #a855f7, #22d3ee)" />
    <VitePwaManifest />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
