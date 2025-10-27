<template>
  <div>
    <el-card shadow="hover">
      <div class="content">
        <div class="left">
          <div class="hospital_name">{{ hospital.name }}</div>
          <div class="tip">
            <div class="level">
              <svg
                t="1761270280526"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4668"
                width="16"
                height="16"
              >
                <path
                  d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
                  p-id="4669"
                ></path>
              </svg>
              <span>{{ levelName }}</span>
            </div>
            <div class="time">
              <svg
                t="1761270442671"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6078"
                width="16"
                height="16"
              >
                <path
                  d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m0-960C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64z"
                  fill="#666666"
                  p-id="6079"
                ></path>
                <path
                  d="M512 304c9.6 0 16 6.4 16 16v256c0 9.6-6.4 16-16 16s-16-6.4-16-16v-256c0-9.6 6.4-16 16-16z"
                  fill="#D8D8D8"
                  p-id="6080"
                ></path>
                <path
                  d="M512 608c-19.2 0-32-12.8-32-32v-256c0-19.2 12.8-32 32-32s32 12.8 32 32v256c0 19.2-12.8 32-32 32z m0-304v16-16z"
                  fill="#666666"
                  p-id="6081"
                ></path>
                <path
                  d="M646.4 662.4c-3.2 6.4-12.8 9.6-22.4 6.4l-108.8-67.2c-6.4-3.2-9.6-12.8-6.4-22.4 3.2-6.4 12.8-9.6 22.4-6.4L640 640c9.6 3.2 12.8 16 6.4 22.4z"
                  fill="#D8D8D8"
                  p-id="6082"
                ></path>
                <path
                  d="M633.6 684.8c-6.4 0-12.8 0-16-3.2l-108.8-67.2c-16-9.6-19.2-28.8-9.6-44.8 9.6-16 28.8-19.2 44.8-9.6l108.8 67.2c16 9.6 19.2 28.8 9.6 44.8-6.4 9.6-19.2 12.8-28.8 12.8z m-108.8-96l124.8 73.6-12.8-9.6-112-64z"
                  fill="#666666"
                  p-id="6083"
                ></path>
              </svg>
              <span>2025</span>
            </div>
          </div>
        </div>
        <div class="right">
          <img src="../../../assets/images/logo.png" alt="" />
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from "vue";

  const props = defineProps(["hospital"]);
  const levelName = ref<string>("");
  switch (props.hospital.medicalLevel) {
    case "AAA":
      levelName.value = "三级甲等";
      break;
    case "BBB":
      levelName.value = "三级乙等";
      break;
    case "AA":
      levelName.value = "二级甲等";
      break;
    case "BB":
      levelName.value = "二级乙等";
      break;
    case "O":
      levelName.value = "其他";
      break;
    case "SSS":
      levelName.value = "三级特等";
      break;
  }
</script>
<style lang="scss" scoped>
  .content {
    display: flex;
    justify-content: space-between;
    .left {
      // width: 60%;
      .tip {
        color: #7f7f7f;
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        width: 200px;
        .level,
        .time {
          display: flex;
          align-items: center;
          svg {
            fill: #7f7f7f;
            transform: translateY(1px); // 根据实际情况调整数值
          }
          span {
            margin-left: 4px;
          }
        }
      }
    }
    .right {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
</style>
