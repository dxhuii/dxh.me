<script setup lang="ts">
import { links } from '~/data/site'

const year = new Date().getFullYear()

const iconBtn =
  'flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/70 text-lg text-black/60 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:text-indigo-500 dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:text-indigo-300'
</script>

<template>
  <footer class="mt-12 flex flex-col items-center gap-5">
    <p class="text-xs tracking-wide text-black/40 dark:text-white/35">Dxh.me © {{ year }}</p>
    <div class="flex items-center gap-2.5">
      <NuxtLink to="/" :class="iconBtn" aria-label="回到首页">
        <i class="i-ri-home-4-line" />
      </NuxtLink>
      <a
        :href="links.repo"
        :class="iconBtn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="查看源码"
      >
        <i class="i-ri-github-fill" />
      </a>
      <ThemeToggle />
    </div>
  </footer>
</template>
