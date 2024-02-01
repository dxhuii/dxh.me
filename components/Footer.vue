<script setup lang="ts">
const year = computed(() => new Date().getFullYear())
</script>

<template>
  <div mt4 text-center text-gray:80>
    <span text="base" mr-2>
      Dxh.me © {{ year }}
    </span>
  </div>
  <div
    text="xl gray4"
    m-5
    flex
    justify-center
    gap-3
  >
    <NuxtLink i-carbon-home to="/" />
    <a i-carbon-logo-github href="https://github.com/dxhuii/dxh.me" target="_blank" />
    <DarkToggle />
  </div>
</template>
