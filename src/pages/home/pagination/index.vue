<template>
  <div>
    <el-pagination
      v-model:current-page="pageNum"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      :background="true"
      layout="  prev, pager, next, jumper,sizes,total"
      :total="13"
    />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from "vue";

  const pageNum = ref<number>(1);
  const pageSize = ref<number>(10);
</script>
<style lang="scss" scoped></style>
