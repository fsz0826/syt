<template>
  <div>
    <Carousel />
    <Search />
    <el-row :gutter="20">
      <el-col :span="20">
        <Level />
        <Region />
        <div class="hospital">
          <div v-if="hospitalList.length > 0" class="hospital_card">
            <HospitalCard
              :hospital="hospital"
              v-for="hospital in hospitalList"
              :key="hospital.id"
              class="item"
            />
          </div>
          <el-empty v-else description="description" />
          <Pagination
            @getPageNum="getPageNum"
            @getPageSize="getPageSize"
            :total="total"
          />
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
  const hospitalList = ref([]);
  const pageNum = ref<string>("1");
  const pageSize = ref<string>("10");
  const total = ref<number>(0);
  const getHospital = async (pageNum: string, pageSize: string) => {
    const result = await reqHospital(pageNum, pageSize);
    hospitalList.value = result.data.myOrgInfos;
    total.value = result.data.total;
  };

  onMounted(() => {
    getHospital(pageNum.value, pageSize.value);
  });
  const getPageNum = (pageNumber: string) => {
    pageNum.value = pageNumber;
    getHospital(pageNum.value, pageSize.value);
  };
  const getPageSize = (pageSi: string) => {
    pageSize.value = pageSi;
    getHospital(pageNum.value, pageSize.value);
  };
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
