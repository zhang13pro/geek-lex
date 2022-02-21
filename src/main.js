import { createApp } from "vue";
import App from "./App.vue";
import Element3 from "element3";
import "element3/lib/theme-chalk/index.css";

import router from "./router/index";
import store from "./store/index";

createApp(App).use(router).use(store).use(Element3).mount("#app");
