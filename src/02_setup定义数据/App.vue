<template>
  <h2>{{ message }}</h2>
  <button @click="changeMessage">change message</button>
  <hr />
  <h2>账号:{{ account.username }}</h2>
  <h2>密码:{{ account.password }}</h2>
  <button @click="changeAccount">change account</button>
  <hr />
  <h2>{{ counter }}</h2>
  <button @click="increment">+1</button>
  <hr />
  <template v-for="music in musics" :key="music">
    <h2>{{ music }}</h2>
  </template>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { reactive, ref } from 'vue'
export default defineComponent({
  setup() {
    // 数据不是响应式的
    let message = 'Hello World'
    function changeMessage() {
      message = 'Hi Vue3'
      console.log(message)
    }

    let account = reactive({
      username: 'Rose',
      password: '123456',
    })
    const changeAccount = () => {
      account.username = 'Jack'
      account.password = '111111'
    }

    const counter = ref(0)
    const increment = () => {
      counter.value++
    }

    const musics = ref([])
    onMounted(() => {
      const severMusics = ['海阔天空', '小苹果', '野狼']
      musics.value = severMusics
    })
    return {
      message,
      changeMessage,
      account,
      changeAccount,
      counter,
      increment,
      musics,
    }
  },
})
</script>

<style scoped></style>
