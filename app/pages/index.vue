<script setup lang="ts">
import { games, projects } from '~/data/site'
</script>

<template>
  <div>
    <HeroCard />

    <section class="mt-10 sm:mt-14">
      <SectionHeading
        title="项目目录"
        icon="i-ri-apps-2-line"
        :badge="`${projects.length} 个项目`"
      />
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        <LinkCard v-for="item in projects" :key="item.href" v-bind="item" />
      </div>
    </section>

    <section class="mt-10 sm:mt-14">
      <SectionHeading title="我玩的游戏" icon="i-ri-gamepad-line" :badge="`${games.length} 款`" />
      <div class="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        <LinkCard v-for="item in games" :key="item.href" v-bind="item" />
      </div>
    </section>
  </div>
</template>
