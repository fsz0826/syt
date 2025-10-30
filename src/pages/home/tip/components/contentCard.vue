<template>
  <div>
    <div class="header">
      <div class="left">
        <slot name="icon"></slot>
        <span>{{ title }}</span>
      </div>
      <div class="right" @click="onMoreClick">
        <span>{{ moreText }}</span>
        <el-icon><ArrowRight /></el-icon>
      </div>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ArrowRight } from "@element-plus/icons-vue";
  interface Props {
    title: string;
    moreText?: string;
  }

  interface Emits {
    (e: "moreClick"): void;
  }

  withDefaults(defineProps<Props>(), {
    moreText: "全部",
  });

  const emit = defineEmits<Emits>();

  const onMoreClick = () => {
    emit("moreClick");
  };
</script>
<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    .left,
    .right {
      display: flex;
      align-items: center;
    }
    .left {
      span {
        margin-left: 5px;
      }
    }

    .right {
      cursor: pointer;
    }
  }
</style>
