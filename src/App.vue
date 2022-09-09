<template>
  <div id="app">
    <NavigationBar />
    <router-view />
    <FooterBar />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import FooterBar from "./components/FooterBar.vue";
export default {
  components: { NavigationBar, FooterBar },
};
</script>
