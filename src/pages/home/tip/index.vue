<template>
  <div class="tip">
    <!-- 常见科室 -->
    <ContentCard
      title="常见科室"
      :moreText="moreText"
      @moreClick="onDepartmentMoreClick"
    >
      <template #icon>
        <el-icon class="icon"><HomeFilled /></el-icon>
      </template>
      <template #content>
        <Content :items="departmentItems" flex-layout />
      </template>
    </ContentCard>

    <!-- 平台公告 -->
    <ContentCard
      title="平台公告"
      class="notice-card"
      :moreText="moreText"
      @moreClick="onNoticeMoreClick"
    >
      <template #icon>
        <el-icon class="icon"><List /></el-icon>
      </template>
      <template #content>
        <Content :items="noticeItems" ellipsis />
      </template>
    </ContentCard>

    <!-- 停诊公告 -->
    <ContentCard
      title="停诊公告"
      class="notice-card"
      :moreText="moreText"
      @moreClick="onStopNoticeMoreClick"
    >
      <template #icon>
        <el-icon class="icon"><List /></el-icon>
      </template>
      <template #content>
        <Content :items="stopNoticeItems" ellipsis />
      </template>
    </ContentCard>
  </div>
</template>

<script lang="ts" setup>
  import { HomeFilled, List } from "@element-plus/icons-vue";
  import { ref } from "vue";
  import Content from "./components/content.vue";
  import ContentCard from "./components/contentCard.vue";

  const moreText = ref("更多");
  // 常见科室数据
  const departmentItems = [
    "神经内科",
    "消化内科",
    "呼吸内科",
    "内科",
    "神经外科",
    "妇科",
    "产科",
    "儿科",
  ];

  // 平台公告数据
  const noticeItems = [
    "关于延长北京大学国际医院放假的通知",
    "北京中医药大学东方医院部分科室医生门诊医",
    "武警总医院号源暂停更新通知",
  ];

  // 停诊公告数据
  const stopNoticeItems = [
    "中国人民解放军总医院第六医学中心(原海军总医院)呼吸内科门诊停诊公告",
    "首都医科大学附属北京潞河医院老年医学科门诊停诊公告",
    "中日友好医院中西医结合心内科门诊停诊公告",
  ];

  // 事件处理函数
  const onDepartmentMoreClick = () => {
    console.log("常见科室更多按钮点击");
  };

  const onNoticeMoreClick = () => {
    console.log("平台公告更多按钮点击");
  };

  const onStopNoticeMoreClick = () => {
    console.log("停诊公告更多按钮点击");
  };
</script>
<style lang="scss" scoped>
  .tip {
    color: #7f7f7f;
    .icon {
      transform: translateY(1px);
    }
    .notice-card {
      margin: 20px 0;
      .icon {
        transform: translateY(1px);
      }
    }
  }
</style>
