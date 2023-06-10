<template>
  <h3 class="show-info">ShowInfo:{{ info }}</h3>
  <!-- 错误做法:在子组件直接修改props中的数据 -->
  <button @click="info.name = 'Jack'">error method</button>
  <!-- 正确做法:单项数据流 -->
  <button @click="showInfoBtnClick">show info button</button>

  <hr />
  <h4>readonly:{{ readonlyInfo }}</h4>
  <!-- 代码无效: 会报警告 -->
  <button @click="readonlyInfo.name = 'Jack'">readonly button</button>
  <button @click="readonlyClick">change info</button>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
    readonlyInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['changeInfo', 'changeReadonlyInfo'],
  setup(props, context) {
    function showInfoBtnClick() {
      context.emit('changeInfo', 'Jack')
    }

    const readonlyClick = () => {
      context.emit('changeReadonlyInfo', 'Tom')
    }

    return {
      showInfoBtnClick,
      readonlyClick,
    }
  },
})
</script>

<style scoped></style>
