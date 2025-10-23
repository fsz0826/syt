import { createApp } from "vue";
import App from "@/App.vue";
import "@/style/reset.scss";
import router from "./router";

import HospitalTop from "@/components/hospital_top/index.vue";
import HospitalBottom from "@/components/hospital_bottom/index.vue";

const app = createApp(App);

app.component("HospitalTop", HospitalTop);
app.component("HospitalBottom", HospitalBottom);

app.use(router);
app.mount("#app");
