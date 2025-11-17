<template>
  <div class="hospital">
    <div class="menu">
      <div class="top">
        <el-icon><House /></el-icon>
        <p>/ 医院信息</p>
      </div>
      <el-menu :default-active="$route.path">
        <el-menu-item
          index="/hospital/register"
          @click="onClick('/hospital/register')"
        >
          <el-icon><Menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/detail"
          @click="onClick('/hospital/detail')"
        >
          <el-icon><Document /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/notice"
          @click="onClick('/hospital/notice')"
        >
          <el-icon><ChatDotSquare /></el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/close"
          @click="onClick('/hospital/close')"
        >
          <el-icon><InfoFilled /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/search"
          @click="onClick('/hospital/search')"
        >
          <el-icon><Search /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import {
    House,
    Menu,
    Document,
    Search,
    InfoFilled,
    ChatDotSquare,
  } from "@element-plus/icons-vue"
  import { useRoute, useRouter } from "vue-router"
  import { useHospitalStore } from "@/store/modules/hospitalStore"
  import { onMounted } from "vue"

  const hospitalStore = useHospitalStore()
  const $route = useRoute()
  const $router = useRouter()
  console.log($route)

  onMounted(() => {
    hospitalStore.getHospitalInfo($route.query.code as string)
  })
  function onClick(path: string) {
    console.log("---", $route)

    $router.push({ path: path, query: { code: $route.query.code } })
  }
</script>
<style lang="scss" scoped>
  .hospital {
    display: flex;
    .menu {
      flex: 2;
      .top {
        display: flex;
        font-size: 14px;
        color: #7f7f7f;
        margin-left: 28px;
        p {
          margin-left: 6px;
        }
      }
    }
    .content {
      flex: 8;
    }
  }
</style>
