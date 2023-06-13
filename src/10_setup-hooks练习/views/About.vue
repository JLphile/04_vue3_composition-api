<template>
  <h2>about-counter:{{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
import { defineComponent } from 'vue'
import useCounter from '../hooks/useCounter'
import useTitle from '../hooks/useTitle'
export default defineComponent({
  name: 'about',
  setup() {
    useTitle('关于')

    return {
      ...useCounter(),
    }
  },
})
</script>

<style scoped></style>
