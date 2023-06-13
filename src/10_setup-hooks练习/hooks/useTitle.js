import { ref, watch } from 'vue'
export default function useTitle(titleValue) {
  // document.title=title
  const title = ref(titleValue)
  watch(title, newValue => {
    document.title = newValue
  })
  return title
}
