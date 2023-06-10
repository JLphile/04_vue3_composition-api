import { ref } from 'vue'
export default function useCounter() {
  let counter = ref(0)
  let increment = () => {
    counter.value++
  }
  let decrement = () => {
    counter.value--
  }
  return {
    counter,
    increment,
    decrement,
  }
}
