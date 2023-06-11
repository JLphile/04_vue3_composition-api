<template>
  <h2>{{ message }}</h2>
  <button @click="message = 'Hello Watch'">change message</button>
  <hr />
  <h3>{{ info.name }}-{{ info.age }}</h3>
  <button @click="info.name = 'Jack'">change info.name</button>
  <button @click="info.friend.name = 'Lily'">change info.friend.name</button>
</template>

<script>
import { defineComponent, ref, reactive, watch } from 'vue'
export default defineComponent({
  setup() {
    const message = ref('Hello World')
    // watch(message, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // })

    const info = reactive({
      name: 'Rose',
      age: 18,
      friend: {
        name: 'Tom',
        age: 38,
      },
    })
    // 获取到proxy对象
    // watch(
    //   info,
    //   (newValue, oldValue) => {
    //     console.log(newValue, oldValue)
    //   },
    //   {
    //     immediate: true,
    //   }
    // )
    // 获取普通对象
    watch(
      () => ({ ...info }),
      (newValue, oldValue) => {
        console.log(newValue, oldValue)
      },
      {
        immediate: true,
        deep: true,
      }
    )
    return {
      message,
      info,
    }
  },
})
</script>

<style scoped></style>
