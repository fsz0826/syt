<template>
  <div class="container">
    <HospitalTop />
    <div class="content">
      <RouterView />
    </div>
    <HospitalBottom />
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from "vue";
  import request from "@/utils/request";
  onMounted(() => {
    request.get("/user?page=3&size=10").then((res) => {
      console.log(res);
    });
  });
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .content {
      min-height: 700px;
      width: 1200px;
      margin-top: 70px;
    }
  }
</style>
