<script setup lang="ts">
import { profile, socials } from '~/data/site'
</script>

<template>
  <section
    class="relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-xl sm:p-10 dark:border-white/10 dark:bg-white/5"
  >
    <div
      class="pointer-events-none absolute -top-28 -right-20 h-72 w-72 rounded-full bg-violet-400/40 blur-[80px] dark:bg-violet-600/30"
    />
    <div
      class="pointer-events-none absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-cyan-300/35 blur-[80px] dark:bg-cyan-600/20"
    />

    <div class="relative">
      <span
        class="font-mono flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-xl font-black text-white shadow-lg shadow-indigo-500/25"
      >
        D
      </span>

      <h1 class="mt-5 text-2xl font-semibold tracking-tight sm:mt-6 sm:text-4xl">
        {{ profile.greeting }} {{ profile.name }} <span class="wave">👋</span>。
      </h1>

      <p
        class="mt-3 flex flex-wrap items-center gap-x-2 text-base font-light text-black/60 sm:mt-4 sm:text-2xl dark:text-white/60"
      >
        <span>{{ profile.role }}</span>
        <code
          class="font-mono group cursor-default rounded-lg bg-black/5 px-2 py-0.5 text-sm font-medium text-black/80 transition-colors sm:text-xl dark:bg-white/10 dark:text-white/85 hover:bg-indigo-500/15 dark:hover:bg-indigo-400/20"
        >
          {{ profile.roleCode }}
        </code>
      </p>

      <div class="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-2.5">
        <a
          v-for="item in socials"
          :key="item.href"
          :href="item.href"
          :style="{ '--brand': item.accent }"
          target="_blank"
          rel="noopener noreferrer"
          class="pill hover:border-transparent hover:bg-[var(--brand)] hover:text-white dark:hover:text-white"
        >
          <i :class="item.icon" class="text-base" />
          <span>{{ item.title }}</span>
        </a>
      </div>
    </div>
  </section>
</template>
