<template lang="pug">
div
  h1 Ask
  AskPost
    div(slot='rank') 1.
    div(slot='points') 178 pts
    div(slot='type') ASK HN:
    div(slot='title')
      | The impact of removing jQuery on our web performance
    div(slot='time') 3 hours ago
    div(slot='username') kevinak
    div(slot='comments')
      router-link(to='/reply') comments

</template>

<script>
import AskPost from "../../components/GeneralPosts/AskPost.vue";
export default {
  components: { AskPost },
};
</script>
