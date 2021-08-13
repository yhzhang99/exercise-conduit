<template>
  <div>
    <div class="content">
      <conduit-header></conduit-header> <router-view></router-view>
    </div>

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
.content {
  min-height: calc(100vh - 60px);
}
footer {
  height: 60px;
}
</style>
