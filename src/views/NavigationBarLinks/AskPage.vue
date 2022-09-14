<template lang="pug">
div
  h1 Ask
  AskPost
    template(#rank) 1.
    template(#points) 178 pts
    template(#type) ASK HN:
    template(#title)
      | The impact of removing jQuery on our web performance
    template(#time) 3 hours ago
    template(#username) kevinak
    template(#comments)
      router-link(to='/reply') comments

</template>

<script>
import AskPost from "../../components/GeneralPosts/AskPost.vue";
export default {
  components: { AskPost },
};
</script>
