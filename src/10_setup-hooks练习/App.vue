<template>
  <h2>App</h2>
  <button @click="currentPage = 'home'">home</button>
  <button @click="currentPage = 'about'">about</button>
  <keep-alive include="home,about">
    <component :is="currentPage"></component>
  </keep-alive>
  <!-- <h2>App</h2>
  <home></home>
  <hr /> -->

  <!-- <about></about> -->
</template>

<script>
import { defineComponent, ref } from 'vue'
import About from './views/About.vue'
import Home from './views/Home.vue'
export default defineComponent({
  components: {
    About,
    Home,
  },
  setup() {
    const currentPage = ref('home')
    function changeTitle(title) {
      useTitle('app title')
    }
    return {
      changeTitle,
      currentPage,
    }
  },
})
</script>

<style scoped></style>
