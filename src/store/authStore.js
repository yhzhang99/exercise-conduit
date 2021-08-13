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
