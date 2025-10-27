<template>
  <div class="region">
    <div class="left">地区：</div>
    <div class="right">
      <ul>
        <li
          :class="{ active: activeFlag === '' }"
          @click="changeActiveFlag('')"
        >
          全部
        </li>
        <li
          v-for="region in hospitalRegion"
          :key="region.regionNum"
          :class="{ active: activeFlag === region.regionNum }"
          @click="changeActiveFlag(region.regionNum)"
        >
          {{ region.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from "vue";

  interface hospitalRegionType {
    name: string;
    regionNum: string;
  }
  const hospitalRegion = ref<hospitalRegionType[]>([
    {
      name: "二七区",
      regionNum: "1",
    },
    {
      name: "惠济区",
      regionNum: "2",
    },
    {
      name: "管城回族区",
      regionNum: "3",
    },
    {
      name: "经开区",
      regionNum: "4",
    },
    {
      name: "上街区",
      regionNum: "5",
    },
    {
      name: "金水区",
      regionNum: "6",
    },
    {
      name: "高新区",
      regionNum: "7",
    },
  ]);

  const activeFlag = ref<string>("");
  function changeActiveFlag(value: string) {
    activeFlag.value = value;
  }
</script>
<style lang="scss" scoped>
  .region {
    color: #7f7f7f;
    display: flex;
    margin: 10px 0;
    .left {
      margin-right: 10px;
      flex-shrink: 0;
    }
    .right {
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          margin-right: 10px;
          margin-bottom: 10px;
          &.active {
            color: #55a6fe;
          }
        }
        li:hover {
          color: #55a6fe;
          cursor: pointer;
        }
      }
    }
  }
</style>
