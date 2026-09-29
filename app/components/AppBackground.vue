<template>
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div
      class="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-indigo-400/30 blur-[110px] dark:bg-indigo-600/25"
    />
    <div
      class="absolute top-1/4 -right-32 h-[28rem] w-[28rem] rounded-full bg-fuchsia-400/25 blur-[110px] dark:bg-fuchsia-600/20"
    />
    <div
      class="absolute -bottom-48 left-1/3 h-[26rem] w-[26rem] rounded-full bg-emerald-300/25 blur-[110px] dark:bg-teal-600/20"
    />
    <div class="dot-grid absolute inset-0 text-black/10 dark:text-white/10" />
  </div>
</template>

<style scoped>
.dot-grid {
  background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0);
  background-size: 26px 26px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 20%, transparent 75%);
}
</style>
