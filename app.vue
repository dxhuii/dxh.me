<script setup>
useHead({
  title: '丁效辉',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/favicon.png'
    }
  ]
})
</script>

<template>
  <NuxtLoadingIndicator />
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  font-family:
    var(--font-sans),
    system-ui,
    -apple-system,
    PingFang SC,
    microsoft yahei,
    Segoe UI,
    Roboto,
    Helvetica,
    noto sans sc,
    hiragino sans gb,
    'sans-serif',
    Apple Color Emoji,
    Segoe UI Emoji,
    Not Color Emoji;
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
