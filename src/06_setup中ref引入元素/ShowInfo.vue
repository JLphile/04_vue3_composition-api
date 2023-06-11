<template></template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    function showInfoFoo() {
      console.log('show-info function')
    }
    return {
      showInfoFoo,
    }
  },
})
</script>

<style scoped></style>
