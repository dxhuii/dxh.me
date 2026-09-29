<script setup lang="ts">
const props = defineProps<{
  title: string
  desc: string
  href: string
  accent: string
  icon?: string
  image?: string
  tag?: string
}>()

/** 底部胶囊按钮上展示的域名 */
const host = computed(() => {
  try {
    return new URL(props.href).host.replace(/^www\./, '')
  } catch {
    return props.href
  }
})
</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" class="card">
    <div class="relative flex flex-1 flex-col items-center px-3 pt-8 pb-6 text-center">
      <!-- 品牌色光晕 -->
      <div
        class="pointer-events-none absolute top-4 h-24 w-24 rounded-full opacity-25 blur-[42px] transition-opacity duration-500 group-hover:opacity-55"
        :style="{ background: accent }"
      />

      <!-- 项目 Logo -->
      <div
        v-if="image"
        class="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm dark:border-white/10"
      >
        <img :src="image" :alt="title" class="h-10 w-10 object-contain" loading="lazy" />
      </div>
      <!-- 游戏图标 -->
      <div
        v-else
        class="relative flex h-14 w-14 items-center justify-center rounded-full text-2xl text-white transition-transform duration-300 group-hover:scale-105"
        :style="{ background: accent, boxShadow: `0 12px 32px -10px ${accent}` }"
      >
        <i :class="icon" />
      </div>

      <h3 class="relative mt-4 text-[15px] font-semibold tracking-wide">
        {{ title }}
      </h3>
      <p class="relative mt-1.5 text-xs leading-relaxed text-black/50 dark:text-white/45">
        {{ desc }}
      </p>
      <span
        v-if="tag"
        class="relative mt-3 rounded-full border border-black/5 px-2.5 py-1 text-[10px] font-medium tracking-widest uppercase dark:border-white/10"
        :style="{ color: accent }"
      >
        {{ tag }}
      </span>
    </div>

    <div class="card-pill">
      <span class="truncate">{{ host }}</span>
      <i
        class="i-ri-arrow-right-up-line shrink-0 text-sm opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
      />
    </div>
  </a>
</template>
