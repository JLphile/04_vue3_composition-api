<template>
  <h3>{{ name }}-{{ age }}-{{ height }}</h3>
</template>

<script>
import { defineComponent, inject } from 'vue'
export default defineComponent({
  setup() {
    const name = inject('name')
    const age = inject('age')
    // 没有provide时的默认值
    const height = inject('height', 1.88)
    return {
      name,
      age,
      height,
    }
  },
})
</script>

<style scoped></style>
