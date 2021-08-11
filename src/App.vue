<template>
  <div>
    <conduit-header></conduit-header>
    <router-view></router-view>
    <conduit-footer></conduit-footer>
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

<style scoped></style>
