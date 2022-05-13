<script setup lang="ts">
const { data } = await useFetch('/api/pageview')
const year = useDateFormat(computed(() => data.value.startAt), 'YYYY')
</script>

<template>
  <div mt-6>
    <div text-gray:80 text="base">
      Dxh.me © {{ year }}
    </div>
    <div
      text="xl gray4"
      m-5
      flex
      justify-center
      gap-3
    >
      <NuxtLink i-carbon-campsite to="/" />
      <a i-ri-github-fill href="https://github.com/antfu/vitesse-nuxt3" target="_blank" />
      <DarkToggle />
    </div>
  </div>
</template>
