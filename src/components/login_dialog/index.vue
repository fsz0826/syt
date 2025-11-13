<template>
  <el-dialog
    :append-to-body="true"
    :destroy-on-close="true"
    v-model="userStore.loginIsVisible"
    :title="isRegister ? '注册' : '登录'"
    width="600"
  >
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      style="max-width: 600px"
      status-icon
      label-width="auto"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input
          v-model="form.phone"
          type="tel"
          maxlength="11"
          placeholder="请输入手机号"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item v-if="isRegister" label="确认密码" prop="confirmPassword">
        <el-input
          v-model="form.confirmPassword"
          type="password"
          placeholder="请再次输入密码"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item label="图片验证码" prop="captchaCode">
        <div style="display: flex; width: 100%">
          <el-input
            v-model="form.captchaCode"
            placeholder="请输入图片验证码"
            style="flex: 1; margin-right: 10px"
          />
          <img
            :src="userStore.captchaImage"
            alt="验证码"
            @click="refreshCaptcha"
            style="height: 32px; cursor: pointer; border-radius: 4px"
          />
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm()">
          {{ isRegister ? "注册" : "登录" }}
        </el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>

    <div style="text-align: right; margin-top: -20px">
      <el-button type="text" @click="toggleMode">
        {{ isRegister ? "已有账号？立即登录" : "没有账号？立即注册" }}
      </el-button>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="userStore.targetVisible()">
          关闭
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { ref, reactive, watch } from "vue"
  import { useUserStore } from "@/store/modules/userStore"
  import type { FormInstance, FormRules } from "element-plus"
  import { ElMessage } from "element-plus"

  const userStore = useUserStore()
  const formRef = ref<FormInstance>()

  // 控制是登录还是注册模式
  const isRegister = ref(false)

  // 表单数据
  const form = reactive({
    phone: "",
    password: "",
    confirmPassword: "",
    captchaCode: "",
  })

  // 表单验证规则
  const rules = reactive<FormRules>({
    phone: [
      { required: true, message: "请输入手机号", trigger: "blur" },
      {
        pattern: /^1[3-9]\d{9}$/,
        message: "请输入正确的手机号",
        trigger: "blur",
      },
    ],
    password: [
      { required: true, message: "请输入密码", trigger: "blur" },
      { min: 6, max: 20, message: "密码长度应在6-20位之间", trigger: "blur" },
    ],
    confirmPassword: [
      {
        validator: (rule, value, callback) => {
          if (isRegister.value && !value) {
            callback(new Error("请确认密码"))
          } else if (isRegister.value && value !== form.password) {
            callback(new Error("两次输入的密码不一致"))
          } else {
            callback()
          }
        },
        trigger: "blur",
      },
    ],
    captchaCode: [
      { required: true, message: "请输入图片验证码", trigger: "blur" },
      { min: 4, max: 4, message: "验证码为4位字符", trigger: "blur" },
    ],
  })

  // 刷新图片验证码
  const refreshCaptcha = async () => {
    userStore.getCaptchaImage()
  }
  // 切换登录/注册模式
  const toggleMode = () => {
    isRegister.value = !isRegister.value
    resetForm()
    refreshCaptcha()
  }

  // 提交表单
  const submitForm = async () => {
    if (!formRef.value) return

    await formRef.value.validate((valid) => {
      console.log(123)

      if (valid) {
        if (isRegister.value) {
          registerUser()
        }
      } else {
        ElMessage.error("请填写正确的信息")
        // 验证失败时刷新验证码
        refreshCaptcha()
      }
    })
  }

  // 重置表单
  const resetForm = () => {
    formRef.value?.resetFields()
  }

  // 监听对话框关闭事件
  watch(
    () => userStore.loginIsVisible,
    (newVal) => {
      if (!newVal) {
        resetForm()
        isRegister.value = false
      }
    }
  )

  //注册
  function registerUser() {
    userStore.register({ phone: form.phone, password: form.password })
  }
</script>

<style scoped lang="scss"></style>
