<template>
  <div class="app">
    <h2>计数:{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
// import { ref } from 'vue'
import useCounter from './hooks/useCounter'
export default defineComponent({
  setup() {
    // let counter = ref(0)
    // let increment = () => {
    //   console.log(counter)
    //   counter.value++
    // }
    // let decrement = () => {
    //   counter.value--
    // }

    // const { counter, increment, decrement } = useCounter()

    return {
      // counter,
      // increment,
      // decrement,
      ...useCounter()
    }
  },
})
</script>

<style scoped></style>
