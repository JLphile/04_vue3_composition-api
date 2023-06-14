<template>
  <ShowInfo name="Jack" :age="22" @info-btn-click="onInfoBtnClick" ref="showInfoRef"></ShowInfo>
  <ShowInfo></ShowInfo>
</template>

<script setup>
import ShowInfo from './ShowInfo.vue'
import{ref,onMounted} from 'vue'

function onInfoBtnClick(payload) {
  console.log('监听到showInfo内部的点击:', payload)
}

// 获取组件实例
const showInfoRef = ref()
onMounted(() => {
  showInfoRef.value.foo()
}
)

</script>

<style scoped></style>
