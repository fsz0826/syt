<template>
  <ul class="list-container" :class="{ 'flex-layout': flexLayout }">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="list-item"
      :class="{ ellipsis: ellipsis }"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script lang="ts" setup>
  interface Props {
    items: string[];
    ellipsis?: boolean;
    flexLayout?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    ellipsis: false,
    flexLayout: false,
  });
</script>
<style lang="scss" scoped>
  .list-container {
    &.flex-layout {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .list-item {
        width: 40%;
      }
    }
  }

  .list-item {
    margin-top: 20px;
    cursor: pointer;
    &.ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
