<template>
  <div>
    <div class="header">
      <div class="left">
        <slot name="icon"></slot>
        <span>{{ title }}</span>
      </div>
      <div class="right" @click="onMoreClick">
        <span>{{ moreText }}</span>
        <svg
          t="1685153789391"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4663"
          width="16"
          height="16"
        >
          <path
            d="M709.845333 250.346667a22.4 22.4 0 0 1 0.533334-30.848 20.48 20.48 0 0 1 29.717333 0.64l272.426667 292.693333-272.426667 292.650667a20.458667 20.458667 0 0 1-29.717333 0.64c-8.32-8.32-8.746667-21.973333-0.533334-30.848l242.346667-262.464-242.346667-262.464z"
            fill="#3D3D3D"
            p-id="4664"
          ></path>
        </svg>
      </div>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
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
      svg {
        transform: translateY(1px);
      }
      span {
        margin-left: 5px;
      }
    }

    .right {
      cursor: pointer;
    }
  }
</style>
