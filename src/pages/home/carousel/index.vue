<template>
  <div>
    <el-carousel height="350px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../../../assets/images/web-banner-1.png" alt="轮播图" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 350px;
}
</style>
