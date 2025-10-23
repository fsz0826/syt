<template>
  <div class="region">
    <div class="left">地区：</div>
    <div class="right">
      <ul>
        <li class="active">金水区</li>
        <li>二七区</li>
        <li>惠济区</li>
        <li>管城回族区</li>
        <li>经开区</li>
        <li>上街区</li>
        <li>二七区</li>
        <li>惠济区</li>
        <li>管城回族区</li>
        <li>经开区</li>
        <li>上街区</li>
        <li>二七区</li>
        <li>惠济区</li>
        <li>管城回族区</li>
        <li>经开区</li>
        <li>上街区</li>
        <li>二七区</li>
        <li>惠济区</li>
        <li>管城回族区</li>
        <li>经开区</li>
        <li>上街区</li>
        <li>二七区</li>
        <li>惠济区</li>
        <li>管城回族区</li>
        <li>经开区</li>
        <li>上街区</li>
        <li>二七区</li>
        <li>惠济区</li>
        <li>管城回族区</li>
        <li>经开区</li>
        <li>上街区</li>
        <li>二七区</li>
        <li>惠济区</li>
        <li>管城回族区</li>
        <li>经开区</li>
        <li>上街区</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
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
