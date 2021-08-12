import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const authStore = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    logout() {
      localStorage.removeItem("token");
    },
  },
  getters: {},
};

export default authStore;
