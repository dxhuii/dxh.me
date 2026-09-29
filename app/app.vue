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
