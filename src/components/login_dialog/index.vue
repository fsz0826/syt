<template>
  <el-dialog
    :append-to-body="true"
    :destroy-on-close="true"
    v-model="userStore.loginIsVisible"
    title="登录/注册"
    width="600"
  >
    <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      status-icon
      label-width="auto"
      class="demo-ruleForm"
    >
      <el-form-item label="Password" prop="pass">
        <el-input type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Confirm" prop="checkPass">
        <el-input type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Age" prop="age">
        <el-input />
      </el-form-item>
      <el-form-item>
        <el-button type="primary"> Submit </el-button>
        <el-button>Reset</el-button>
      </el-form-item>
    </el-form>
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
  import { useUserStore } from "@/store/modules/userStore"
  const userStore = useUserStore()
</script>

<style scoped lang="scss"></style>
