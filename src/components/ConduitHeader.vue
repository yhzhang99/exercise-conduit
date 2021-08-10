<template>
  <div class="w h">
    <div id="left">
      <a href="https://vue-vuex-realworld.netlify.app/#/">conduit</a>
    </div>
    <div id="right">
      <ul>
        <li>
          <router-link to="/home">Home</router-link>
        </li>
        <li>
          <router-link to="/login"><a-icon type="form" />Sign in</router-link>
        </li>
        <li>
          <router-link to="/register"
            ><a-icon type="form" />Sign up</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
  color: #5cb85c;
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
.router-link-active {
  color: rgba(0, 0, 0, 0.8) !important;
}
</style>
