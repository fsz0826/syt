<template>
  <div>
    <Carousel />
    <Search />
    <el-row :gutter="20">
      <el-col :span="20">
        <Level />
        <Region />
        <div class="hospital">
          <div v-if="hospitalList" class="hospital_card">
            <HospitalCard
              :hospital="hospital"
              v-for="hospital in hospitalList"
              :key="hospital.id"
              class="item"
            />
          </div>
          <el-empty v-else description="description" />
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
  import { reqHospital } from "@/api/home";
  import { onMounted, ref } from "vue";
  const hospitalList = ref();

  const test = async () => {
    const result = await reqHospital();
    hospitalList.value = result.data.myOrgInfos;
    console.log(hospitalList.value);
  };

  onMounted(() => {
    test();
  });
</script>
<style lang="scss" scoped>
  .hospital {
    // display: flex;
    margin-bottom: 10px;
    .hospital_card {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item {
        width: 48%;
        margin: 10px 0;
      }
    }
  }
</style>
