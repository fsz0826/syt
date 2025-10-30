import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue"),
      meta: {
        title: "首页",
      },
    },
    {
      path: "/hospital",
      component: () => import("@/pages/hospital/index.vue"),
      meta: {
        title: "医院",
      },
      children: [
        {
          path: "register",
          component: () => import("@/pages/hospital/register/index.vue"),
          meta: {
            title: "预约挂号",
          },
        },
        {
          path: "detail",
          component: () => import("@/pages/hospital/detail/index.vue"),
          meta: {
            title: "医院详情",
          },
        },
        {
          path: "notice",
          component: () => import("@/pages/hospital/notice/index.vue"),
          meta: {
            title: "预约通知",
          },
        },
        {
          path: "close",
          component: () => import("@/pages/hospital/close/index.vue"),
          meta: {
            title: "停诊信息",
          },
        },
        {
          path: "search",
          component: () => import("@/pages/hospital/search/index.vue"),
          meta: {
            title: "查询/取消",
          },
        },
      ],
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});
