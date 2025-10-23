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
