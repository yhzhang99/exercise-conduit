import Vue from "vue";
import Vuex from "vuex";
import getArticles from "../api/getArticles";
import getFeed from "../api/getFeed";
import commonStore from "./commonStore";
import authStore from "./authStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articleData: [
      {
        title: "Loading articles...",
        author: {
          username: null,
        },
      },
    ],
    feedData: [
      {
        title: "Loading articles...",
        author: {
          username: null,
        },
      },
    ],
    user: {},
    token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
  },
  mutations: {
    getArt(state, articles) {
      state.articleata = articles;
    },
    getFeed(state, articles) {
      state.feedData = articles;
    },
    changeToken(state, user) {
      state.user = user;
      localStorage.setItem("token", user.token);
      // console.log(state.user);
    },
  },
  actions: {
    getArt(context) {
      getArticles()
        .then((response) => {
          context.commit("getArt", response.articles);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getFeed(context) {
      getFeed()
        .then((response) => {
          context.commit("getFeed", response.articles);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {
    commonStore,
    authStore,
  },
});
