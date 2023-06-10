<template>
  <h2>{{ info.name }}-{{ info.age }}</h2>
  <h2>{{ name }}-{{ age }}</h2>
  <h2>height:{{ height }}</h2>
  <button @click="age++">age++</button>
  <button @click="height='1.89'">change height</button>
</template>

<script>
import { defineComponent, reactive, toRef, toRefs } from 'vue'
export default defineComponent({
  setup() {
    const info = reactive({
      name: 'Rose',
      age: 18,
      height: 1.88,
    })
    // 使得数据结构后仍然具有响应式
    const { name, age } = toRefs(info)
    const height = toRef(info, 'height')
    return {
      info,
      name,
      age,
      height,
    }
  },
})
</script>

<style scoped></style>
