<script setup lang="ts">
definePageMeta({
  key: route => route.fullPath,
})
const route = useRoute()
const id = $(computed(() => route.params.id as string))
</script>

<template>
  <div>
    {{ id }}
    <div mt-4 @click="$router.go(-1)">
      返回
    </div>
  </div>
</template>
