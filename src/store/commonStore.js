// import register from "../api/register";
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
    },
  },
  actions: {},
  getters: {},
};

export default commonStore;
