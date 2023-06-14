<template>
  <div>ShowInfo:{{ name }}-{{ age }}</div>
  <button @click="showInfoBtnClick">change info</button>
</template>

<script setup>
import {defineExpose} from 'vue'
const props = defineProps({
  name: {
    type: String,
    default: 'Rose',
  },
  age: {
    type: Number,
    default: 0,
  },
})

const emits = defineEmits()
function showInfoBtnClick() {
  emits('infoBtnClick', 'showInfo内部发生了点击')
}

function foo() {
  console.log('ShowInfo foo函数被调用了')
}

defineExpose({
  foo,
})
</script>

<style scoped></style>
