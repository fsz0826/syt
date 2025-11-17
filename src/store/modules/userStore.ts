import { defineStore } from "pinia"
import { ref } from "vue"

import { reqCaptchaCode } from "@/api/home"
import { reqUserRegister, reqUserLogin } from "@/api/user"

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
  async function login(data: object) {
    try {
      const result: any = await reqUserLogin(data)
      console.log("-----", result)

      if (result.code === "400") {
        console.log("----", result.code)

        ElMessage.error(result.message)
      }
    } catch (error) {}
  }
  return {
    loginIsVisible,
    captchaImage,
    targetVisible,
    getCaptchaImage,
    register,
    login,
  }
})
