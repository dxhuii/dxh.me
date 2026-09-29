<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error?.statusCode === 404)

function goHome() {
  return clearError({ redirect: '/' })
}
</script>

<template>
  <NuxtLayout>
    <section
      class="relative flex flex-col items-center overflow-hidden rounded-3xl border border-black/5 bg-white/70 px-6 py-20 text-center shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
    >
      <div
        class="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-400/30 blur-[80px] dark:bg-indigo-600/25"
      />
      <p
        class="font-mono relative text-6xl font-black tracking-tight text-black/15 dark:text-white/15"
      >
        {{ error?.statusCode || 500 }}
      </p>
      <h1 class="relative mt-4 text-xl font-semibold">
        {{ is404 ? '这个页面走丢了' : '页面出了点问题' }}
      </h1>
      <p class="relative mt-2 text-sm text-black/50 dark:text-white/45">
        {{
          is404 ? '你访问的链接不存在，或者已经被移动到别处。' : error?.message || '稍后再试试吧。'
        }}
      </p>
      <button
        type="button"
        class="pill relative mt-6 hover:border-transparent hover:bg-[var(--brand)] hover:text-white dark:hover:text-white"
        style="--brand: #6366f1"
        @click="goHome"
      >
        <i class="i-ri-home-4-line text-base" />
        <span>回到首页</span>
      </button>
    </section>
  </NuxtLayout>
</template>
