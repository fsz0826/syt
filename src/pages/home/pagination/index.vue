<template>
  <div>
    <el-pagination
      v-model:current-page="pageNum"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      :background="true"
      layout="  prev, pager, next, jumper,sizes,total"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script lang="ts" setup>
  defineProps(["total"]);
  const $emits = defineEmits(["getPageNum", "getPageSize"]);
  import { ref } from "vue";

  const pageNum = ref<number>(1);
  const pageSize = ref<number>(10);

  function handleSizeChange() {
    $emits("getPageSize", pageSize.value.toString());
  }
  function handleCurrentChange() {
    $emits("getPageNum", pageNum.value.toString());
  }
</script>
<style lang="scss" scoped></style>
