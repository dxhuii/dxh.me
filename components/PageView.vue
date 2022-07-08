<script setup lang="ts">
const { data } = await useFetch('/api/pageview')

const time = useTimeAgo(computed(() => data.value.startAt))
const year = useDateFormat(computed(() => data.value.startAt), 'YYYY')
</script>

<template>
  <div text-gray:80>
    <span text="base" mr-2>
      Dxh.me © {{ year }}
    </span>
    <span font-500 text-gray>{{ data.pageview }}</span>
    页面次数 停留
    <span text-gray>{{ time }}</span>
  </div>
</template>
