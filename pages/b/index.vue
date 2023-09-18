<script setup lang="ts">
useHead({
  title: () => 'b',
})

const router = useRouter()
const back = ref<any>('')

onMounted(() => {
  back.value = router.options.history.state.back
})
router.afterEach(() => {
  back.value = router.options.history.state.back
})
</script>

<template>
  <div>b</div>
  <div mt-4 @click="$router.go(-1)">
    返回
  </div>
  <NuxtPage />
</template>
