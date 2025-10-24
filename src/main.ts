import { createApp } from "vue";
import App from "@/App.vue";
import "@/style/reset.scss";
import router from "./router";

//use element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//use element-plus icon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//ElementPlus中文
import zhCn from "element-plus/es/locale/lang/zh-cn";

import HospitalTop from "@/components/hospital_top/index.vue";
import HospitalBottom from "@/components/hospital_bottom/index.vue";

const app = createApp(App);

//use element-plus icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.component("HospitalTop", HospitalTop);
app.component("HospitalBottom", HospitalBottom);

app.use(ElementPlus, {
  locale: zhCn,
});
app.use(router);
app.mount("#app");
