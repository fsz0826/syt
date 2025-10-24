<template>
  <div>
    <Carousel />
    <Search />
    <el-row :gutter="20">
      <el-col :span="20">
        <Level />
        <Region />
        <div class="hospital">
          <HospitalCard v-for="item in 10" :key="item" class="item" />
          <Pagination />
        </div>
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
  import HospitalCard from "./card/index.vue";
  import Pagination from "./pagination/index.vue";
</script>
<style lang="scss" scoped>
  .hospital {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10px;
    .item {
      width: 48%;
      margin: 10px 0;
    }
  }
</style>
