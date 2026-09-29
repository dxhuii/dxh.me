<script setup lang="ts">
defineProps<{
  title: string
  icon: string
  badge?: string
}>()
</script>

<template>
  <div class="mb-4 flex items-center gap-2.5 sm:mb-5">
    <span
      class="flex h-8 w-8 items-center justify-center rounded-xl border border-black/5 bg-white/70 text-base text-indigo-500 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-indigo-300"
    >
      <i :class="icon" />
    </span>
    <h2 class="text-base font-semibold tracking-wide sm:text-lg">
      {{ title }}
    </h2>
    <span
      v-if="badge"
      class="ml-1 rounded-full border border-black/5 bg-black/5 px-2.5 py-0.5 text-[11px] font-medium text-black/50 dark:border-white/10 dark:bg-white/5 dark:text-white/50"
    >
      {{ badge }}
    </span>
  </div>
</template>
