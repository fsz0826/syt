import { defineStore } from "pinia"
import { ref } from "vue"

import { reqCaptchaCode } from "@/api/home"
import { ElMessage } from "element-plus"

export const useUserStore = defineStore("userStore", () => {
  const loginIsVisible = ref<boolean>(false)
  const captchaImage = ref<string>("")
  function targetVisible() {
    loginIsVisible.value = !loginIsVisible.value
  }
  async function getCaptchaImage() {
    try {
      const result = await reqCaptchaCode()
      console.log(result)
      captchaImage.value = result.data.captchaImage
    } catch (error) {
      ElMessage.error("获取验证码失败")
    }
  }
  return { loginIsVisible, captchaImage, targetVisible, getCaptchaImage }
})
