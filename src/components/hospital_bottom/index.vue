<template>
  <div class="bottom">
    <div class="content">
      <div class="left">
        <p>京ICP备 13018369号</p>
        <p>电话挂号010-56253825</p>
      </div>
      <div class="right">
        <ul>
          <li>联系我们</li>
          <li>合作伙伴</li>
          <li>用户协议</li>
          <li>隐私协议</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
  .bottom {
    width: 100%;
    height: var(--bottom-height);
    background-color: #f2f0f5;
    display: flex;
    justify-content: center;
    .content {
      width: 1200px;
      display: flex;
      justify-content: space-between;

      .left {
        display: flex;
        font-size: 14px;
        align-items: center;
        p:first-child {
          margin-right: 10px;
        }
      }
      .right {
        display: flex;
        ul {
          display: flex;
          justify-content: center;
          align-items: center;
          li {
            font-size: 14px;
            margin-right: 10px;
          }
        }
      }
    }
  }
</style>
