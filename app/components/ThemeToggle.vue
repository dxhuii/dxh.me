<script setup lang="ts">
const color = useColorMode()

const isDark = computed(() => color.value === 'dark')

function toggle() {
  color.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <button
    type="button"
    :aria-label="isDark ? '切换到明亮模式' : '切换到暗黑模式'"
    :title="isDark ? '切换到明亮模式' : '切换到暗黑模式'"
    class="group flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/70 text-lg text-black/60 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:text-indigo-500 dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:text-indigo-300"
    @click="toggle"
  >
    <i
      :class="isDark ? 'i-ri-sun-line' : 'i-ri-moon-line'"
      class="transition-transform duration-500 group-hover:rotate-45"
    />
  </button>
</template>
