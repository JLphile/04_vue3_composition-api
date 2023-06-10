<template>
  <h2>{{ fullName }}</h2>
  <button @click="changeFullName">change fullName</button>
</template>

<script>
import { computed, defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const names = reactive({
      firstName: 'Rose',
      lastName: 'Jack',
    })
    // const fullName = computed(() => names.firstName + ' ' + names.lastName)
    const fullName = computed({
      set(newValue) {
        const temName = newValue.split(' ')
        names.firstName = temName[0]
        names.lastName = temName[1]
      },
      get() {
        return names.firstName + ' ' + names.lastName
      },
    })
    console.log(fullName)
    function changeFullName() {
      fullName.value = 'Lily Hanmeimei'
    }
    return {
      names,
      fullName,
      changeFullName,
    }
  },
})
</script>

<style scoped></style>
