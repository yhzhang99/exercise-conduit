// import register from "../api/register";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const commonStore = {
  namespaced: true,
  state: {
    user: {},
    token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
  },
  mutations: {
    changeToken(state, user) {
      state.user = user;
      localStorage.setItem("token", user.token);
      // console.log(state.user);
    },
  },
  actions: {},
  getters: {},
};

export default commonStore;
