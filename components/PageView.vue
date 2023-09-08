<script setup lang="ts">
const { data } = await useFetch('/api/pageview')

const year = useDateFormat(computed(() => data.value?.startAt), 'YYYY')
</script>

<template>
  <div text-gray:80 text-center>
    <span text="base" mr-2>
      Dxh.me © {{ year }}
    </span>
  </div>
</template>
