<template>
  <div class="w h">
    <div id="left">
      <router-link to="/home">conduit</router-link>
    </div>
    <div id="right">
      <ul>
        <li>
          <router-link to="/home">Home</router-link>
        </li>
        <li>
          <router-link to="/login" v-if="token === ''"
            ><a-icon type="form" />Sign in</router-link
          >
        </li>
        <li>
          <router-link to="/register" v-if="token === ''"
            ><a-icon type="form" />Sign up</router-link
          >
        </li>
        <li>
          <a href="###" v-if="token !== ''" @click="exit"
            ><a-icon type="logout" />Exit</a
          >
        </li>
        <!-- <button @click="qwe">e1231</button> -->
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      data() {
        return {};
      },
    };
  },
  methods: {
    ...mapActions("authStore", ["logout"]),
    exit() {
      this.logout();
      console.log(this.token);
      setTimeout(function () {
        window.location.reload();
      }, 100);
    },
    // qwe() {
    //    console.log(this.token);
    // }
  },
  computed: {
    ...mapState("commonStore", ["token"]),
  },
};
</script>

<style scoped>
.w {
  width: 1110px;
  margin: 0 auto;
}
.h {
  height: 50px;
  line-height: 50px;
}
#left {
  float: left;
  font-family: sans-serif;
  font-size: 22px;
  font-weight: bolder;
  color: #5cb85c !important;
}
a,
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: inherit;
}
#right {
  float: right;
  font-size: 14px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  float: left;
  padding: 0 10px 0 10px;
  color: rgba(0, 0, 0, 0.3);
}
#right .router-link-active {
  color: rgba(0, 0, 0, 0.8) !important;
}
</style>
