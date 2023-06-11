<template>
  <h2 ref="title">我是标题</h2>
  <button ref="btn">我是按钮</button>
  <button @click="getElement">获取元素</button>
  <show-info ref="showInfo"></show-info>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import ShowInfo from './ShowInfo.vue'
export default defineComponent({
  components: {
    ShowInfo,
  },
  setup() {
    const title = ref()
    const btn = ref()
    const showInfo = ref()
    onMounted(() => {
      console.log(title.value)
      console.log(btn.value)
      showInfo.value.showInfoFoo()
    })
    function getElement() {
      console.log(title.value)
    }
    return {
      title,
      btn,
      getElement,
      showInfo,
    }
  },
  // mounted() {
  //   console.log(this.$refs.title)
  //   console.log(this.$refs.btn)
  // }
})
</script>

<style scoped></style>
