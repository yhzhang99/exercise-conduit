import Vue from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { Icon } from "ant-design-vue";
// import { Menu } from "ant-design-vue";
import Axios from "axios";
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false;

// Vue.use(Icon);
// Vue.use(Menu);
Vue.use(Antd);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
