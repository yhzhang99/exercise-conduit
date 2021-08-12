<template>
  <div>
    <conduit-header></conduit-header>
    <router-view></router-view>
    <footer><conduit-footer></conduit-footer></footer>
  </div>
</template>

<script>
import ConduitHeader from "./components/ConduitHeader.vue";
import ConduitFooter from "./components/ConduitFooter.vue";

export default {
  name: "App",
  components: {
    ConduitHeader,
    ConduitFooter,
  },
};
</script>

<style scoped>
html {
  height: 100%;
}
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
}

header {
  background-color: #ffe4c4;
}
main {
  padding-bottom: 100px;
  background-color: #bdb76b;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #ffc0cb;
}
</style>
