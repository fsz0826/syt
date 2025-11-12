import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore("userStore", () => {
  const loginIsVisible = ref<boolean>(false)
  function targetVisible() {
    loginIsVisible.value = !loginIsVisible.value
  }
  return { loginIsVisible, targetVisible }
})
