<script setup lang="ts">
const props = defineProps<{
  title: string
  desc: string
  href: string
  accent: string
  icon?: string
  image?: string
  logoWide?: boolean
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

/** 卡片根节点：把光标坐标写进 CSS 变量，驱动跟随鼠标的聚光灯 */
const cardRef = ref<HTMLElement | null>(null)
/** 聚光层：品牌色直接写入元素，不走 :style 绑定 */
const spotRef = ref<HTMLElement | null>(null)

onMounted(() => {
  spotRef.value?.style.setProperty('--accent', props.accent)
})

function handlePointerMove(event: PointerEvent) {
  const el = cardRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  el.style.setProperty('--my', `${event.clientY - rect.top}px`)
}
</script>

<template>
  <a
    ref="cardRef"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="card group"
    @pointermove="handlePointerMove"
  >
    <!-- 跟随鼠标的品牌色聚光 -->
    <span ref="spotRef" class="spotlight" aria-hidden="true" />

    <div class="relative flex flex-1 flex-col items-center px-3 pt-8 pb-6 text-center">
      <!-- 品牌色光晕 -->
      <div
        class="pointer-events-none absolute top-4 h-24 w-24 rounded-full opacity-25 blur-[42px] transition-opacity duration-500 group-hover:opacity-55"
        :style="{ background: accent }"
      />

      <!-- 项目 / 游戏 Logo -->
      <div
        v-if="image"
        class="relative flex items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-transform duration-300 group-hover:scale-[1.04] dark:border-white/10"
        :class="logoWide ? 'h-16 w-full px-2' : 'h-14 w-14'"
      >
        <img
          :src="image"
          :alt="title"
          loading="lazy"
          class="object-contain"
          :class="logoWide ? 'max-h-12 w-auto max-w-full' : 'h-10 w-10'"
        />
      </div>
      <!-- 备用图标 -->
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

<style scoped>
/* 顶部高光边：让卡片有被光打亮的立体感 */
.card::after {
  content: '';
  position: absolute;
  top: 0;
  right: 14%;
  left: 14%;
  height: 1px;
  pointer-events: none;
  background: linear-gradient(90deg, transparent, var(--dxh-highlight), transparent);
}

/* 聚光灯：光心跟着 --mx / --my 移动 */
.spotlight {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.35s ease;
  background: radial-gradient(
    var(--dxh-spot-size) circle at var(--mx, 50%) var(--my, 0%),
    var(--accent, #6366f1),
    transparent 70%
  );
}

.card:hover .spotlight,
.card:focus-visible .spotlight {
  opacity: var(--dxh-spot-alpha);
}

@media (prefers-reduced-motion: reduce) {
  .spotlight {
    transition: none;
  }
}
</style>
