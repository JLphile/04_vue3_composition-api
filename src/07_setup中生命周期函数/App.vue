<template></template>

<script>
import { defineComponent } from 'vue'
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
} from 'vue'
export default defineComponent({
  setup() {
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })

    return {}
  },
})
</script>

<style scoped></style>
