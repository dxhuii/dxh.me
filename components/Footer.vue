<script setup lang="ts">
const { data } = await useFetch('/api/pageview')
const time = useTimeAgo(computed(() => data.value.startAt))
const year = useDateFormat(computed(() => data.value.startAt), 'YYYY')
</script>

<template>
  <div>
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
    <div text-gray:80 text-center>
      dxh.me © {{ year }}
      访问数：
      <span font-500 text-gray>{{ data.pageview }}</span>
      次 -
      访问时间：
      <span text-gray>{{ time }}</span>
    </div>
  </div>
</template>
