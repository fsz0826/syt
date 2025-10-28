<template>
  <div class="search">
    <el-autocomplete
      clearable
      placeholder="请输入医院名称"
      v-model="hospitalName"
      :trigger-on-focus="false"
      :fetch-suggestions="fetchInfo"
      @select="handleSelect"
    />
    <el-button
      type="primary"
      size="default"
      :icon="Search"
      @click="handleSearch"
      >搜索</el-button
    >
  </div>
</template>
<script lang="ts" setup>
  import { Search } from "@element-plus/icons-vue";
  import { ref } from "vue";

  const $emits = defineEmits(["getParm"]);
  const props = defineProps(["hospitalList"]);

  const hospitalName = ref<string>("");

  const fetchInfo = (queryString: string, cb: any) => {
    $emits("getParm", queryString);

    setTimeout(() => {
      const hospitals = props.hospitalList.map((item: any) => ({
        value: item.name,
        hospitalCode: item.code,
      }));
      if (hospitals.length > 0) {
        cb(hospitals);
      }
    }, 300);
  };
  function handleSelect(item: Record<string, string>) {
    $emits("getParm", item.value);
  }
  function handleSearch() {
    $emits("getParm", hospitalName.value);
  }
</script>
<style lang="scss" scoped>
  .search {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    :deep(.el-autocomplete) {
      width: 600px;
      margin-right: 10px;
    }
  }
</style>
