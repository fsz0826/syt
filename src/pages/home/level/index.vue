<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级：</div>
      <div class="right">
        <ul>
          <li class="active">全部</li>
          <li>三级甲等</li>
          <li>三级乙等</li>
          <li>二级甲等</li>
          <li>二级乙等</li>
          <li>一级</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
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
