<template lang="pug">
#app
  .bg-general-post
    NavigationBar
    router-view
    FooterBar
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import FooterBar from "./components/FooterBar.vue";
export default {
  components: { NavigationBar, FooterBar },
};
</script>
