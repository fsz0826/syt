import { defineStore } from "pinia"
import { ref } from "vue"

import { reqCaptchaCode } from "@/api/home"
import { reqUserRegister } from "@/api/user"

import { ElMessage } from "element-plus"
import type { AxiosResponse } from "axios"

export const useUserStore = defineStore("userStore", () => {
  const loginIsVisible = ref<boolean>(false)
  const captchaImage = ref<string>("")
  function targetVisible() {
    loginIsVisible.value = !loginIsVisible.value
  }
  async function getCaptchaImage() {
    try {
      const result = await reqCaptchaCode()
      captchaImage.value = result.data.captchaImage
    } catch (error) {
      ElMessage.error("获取验证码失败")
    }
  }

  async function register(data: object) {
    try {
      const result: any = await reqUserRegister(data)
      if (result.message === "该手机号已注册") {
        ElMessage.error(result.message)
        return
      }
      ElMessage.success(result)
    } catch (error) {
      ElMessage.error("注册失败")
    }
  }
  return {
    loginIsVisible,
    captchaImage,
    targetVisible,
    getCaptchaImage,
    register,
  }
})
