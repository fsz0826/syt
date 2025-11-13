<template>
  <div class="top">
    <div class="content">
      <div class="left" @click="goHome">
        <img src="../../assets/images/logo.png" alt="logo" />
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login" @click="openLoginDialog">登录/注册</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { useUserStore } from "@/store/modules/userStore"
  import { useRouter } from "vue-router"
  const $router = useRouter()
  function goHome() {
    $router.push({ path: "/" })
  }

  const userStore = useUserStore()
  function openLoginDialog() {
    userStore.targetVisible()
    userStore.getCaptchaImage()
  }
</script>
<style lang="scss" scoped>
  .top {
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999;
    .content {
      width: 1200px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          height: 50px;
          width: 50px;
          margin-right: 10px;
        }
        p {
          font-size: 20px;
          color: #55a6fe;
        }
      }
      .right {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #bbb;
        .help {
          cursor: pointer;
          margin-right: 10px;
        }
        .login {
          cursor: pointer;
        }
      }
    }
  }
</style>
