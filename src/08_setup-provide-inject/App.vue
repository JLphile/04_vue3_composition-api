<template>
  <h2>App:{{ name }}</h2>
  <button @click="name = 'Jack'">change name</button>
  <show-info></show-info>
</template>

<script>
import { defineComponent, ref, provide } from 'vue'
import ShowInfo from './ShowInfo.vue'
export default defineComponent({
  components: {
    ShowInfo,
  },
  setup() {
    const name = ref('Rose')
    const age = ref('18')
    provide('name', name)
    provide('age', age)
    return {
      name,
      age,
    }
  },
})
</script>

<style scoped></style>
