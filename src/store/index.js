import Vue from "vue";
import Vuex from "vuex";
import getArticles from "../api/getArticles";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articleata: [
      {
        title: "Loading articles...",
        author: {
          username: null,
        },
      },
    ],
  },
  mutations: {
    getArt(state, articles) {
      state.articleata = articles;
    },
  },
  actions: {
    getArt(context) {
      getArticles().then((response) => {
        context.commit("getArt", response.articles);
      });
    },
  },
  modules: {},
});
