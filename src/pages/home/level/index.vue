<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级：</div>
      <div class="right">
        <ul>
          <li
            :class="{ active: activeFlag === '' }"
            @click="changeActiveFlag('')"
          >
            全部
          </li>
          <li
            v-for="levle in hospitalArr"
            :key="levle.value"
            :class="{ active: activeFlag === levle.value }"
            @click="changeActiveFlag(levle.value)"
          >
            {{ levle.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from "vue";

  interface hospitalArrType {
    name: string;
    value: string;
  }

  const hospitalArr = ref<hospitalArrType[]>([
    {
      name: "三级甲等",
      value: "1",
    },
    {
      name: "三级乙等",
      value: "2",
    },
    {
      name: "二级甲等",
      value: "3",
    },
    {
      name: "二级乙等",
      value: "4",
    },
    {
      name: "一级",
      value: "5",
    },
  ]);

  const activeFlag = ref<string>("");
  function changeActiveFlag(value: string) {
    activeFlag.value = value;
  }
</script>
<style lang="scss" scoped>
  .level {
    color: #7f7f7f;
    h1 {
      margin: 10px 0;
    }
    .content {
      display: flex;
      .left {
        margin-right: 10px;
      }
      .right {
        ul {
          display: flex;
          li {
            margin-right: 10px;
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
  }
</style>
