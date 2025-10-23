<template>
  <div>
    <Carousel />
    <Search />
    <el-row :gutter="20">
      <el-col :span="20">
        <Level />
        <Region />
      </el-col>
      <el-col :span="4"> 456 </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
  import Carousel from "./carousel/index.vue";
  import Search from "./search/index.vue";
  import Level from "./level/index.vue";
  import Region from "./region/index.vue";
</script>
<style lang="scss" scoped></style>
