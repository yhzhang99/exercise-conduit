import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import ConduitHome from "../views/ConduitHome";
import ConduitLogin from "../views/ConduitLogin";
import ConduitRegister from "../views/ConduitRegister";
import NotExist from "../views/404";

const routes = [
  {
    path: "/home",
    component: ConduitHome,
  },
  {
    path: "/login",
    component: ConduitLogin,
  },
  {
    path: "/register",
    component: ConduitRegister,
  },
  {
    path: "/404",
    component: NotExist,
  },
  { path: "*", redirect: "/home" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
