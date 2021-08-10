<template>
  <div id="wrap">
    <div class="w">
      <p id="con">
        <a href="https://vue-vuex-realworld.netlify.app/#/">conduit</a>
      </p>
      <p id="an">
        An interactive learning project from
        <a href="https://thinkster.io/" target="blank">Thinkster</a>. Code &
        design licensed under MIT.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#wrap {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f3f3f3;
}
.w {
  width: 1110px;
  margin: 0 auto;
}
#con {
  float: left;
  margin: 0;
  padding-right: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #5cb85c;
}
#an {
  float: left;
  margin: 0;
  font-size: 12px;
  color: #bbb;
}
#an a {
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
</style>
