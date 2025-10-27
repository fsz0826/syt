<template>
  <div>
    <el-pagination
      v-model:current-page="pageNum"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      :background="true"
      layout="  prev, pager, next, jumper,sizes,total"
      :total="13"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from "vue";

  const pageNum = ref<number>();
  const pageSize = ref<number>();

  function handleSizeChange() {
    console.log(pageSize.value);
  }
  function handleCurrentChange() {
    console.log(pageNum.value);
  }
</script>
<style lang="scss" scoped></style>
