<template>
  <h2>home-counter:{{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>

  <button @click="popularClick">首页-流行</button>
  <button @click="hotClick">首页-热门</button>
  <button @click="songClick">首页-歌单</button>
</template>

<script>
import { defineComponent } from 'vue'

import useCounter from '../hooks/useCounter'
import useTitle from '../hooks/useTitle'
export default defineComponent({
  name: 'home',
  setup() {
    const title = useTitle()
    function popularClick() {
      title.value = '首页-流行'
    }
    function hotClick() {
      title.value = '首页-热门'
    }
    function songClick() {
      title.value = '首页-歌单'
    }

    const { counter, increment, decrement } = useCounter()
    return {
      counter,
      increment,
      decrement,
      popularClick,
      hotClick,
      songClick,
    }
  },
})
</script>

<style scoped></style>
