<template>
  <div id="app">
    <NavigationBar />
    <router-view />
    <FooterChunk />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import FooterChunk from "./components/FooterChunk.vue";
export default {
  components: { NavigationBar, FooterChunk },
};
</script>
