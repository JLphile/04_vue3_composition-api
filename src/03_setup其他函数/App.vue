<template>
  <h2>App:{{ info }}</h2>
  <ShowInfo
    :info="info"
    :readonlyInfo="readonlyInfo"
    @changeInfo="changeInfoName"
    @changeReadonlyInfo="changeReadonlyInfoName"
  ></ShowInfo>
</template>

import ShowInfo from './ShowInfo.vue';
<script>
import { reactive, readonly, defineComponent } from 'vue'
import ShowInfo from './ShowInfo.vue'
export default defineComponent({
  components: {
    ShowInfo,
  },
  setup() {
    const info = reactive({
      name: 'Rose',
      age: 18,
      height: 1.88,
    })

    function changeInfoName(payload) {
      info.name = payload
    }
    function changeReadonlyInfoName(payload) {
      info.name = payload
    }
    const readonlyInfo = readonly(info)
    return {
      info,
      changeInfoName,
      readonlyInfo,
      changeReadonlyInfoName,
    }
  },
})
</script>

<style scoped></style>
