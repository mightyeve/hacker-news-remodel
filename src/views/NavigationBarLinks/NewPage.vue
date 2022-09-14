<template lang="pug">
div
  h1 New
  div(v-for="post in posts")
    GeneralPost
      template(#rank)
        p.text-center.text-xl.p-1.text-white {{ post.rank + "."}}
      template(#points) {{post.points  + " pts"}}
      template(#title) {{ post.title }}
      template(#time) {{ post.time + " hours ago"}}
      template(#username) {{ post.username }}
      template(#link) {{ post.link }}
      template(#comments) 
        router-link(:key='post.id' :to="{ name: 'reply', params: { id: post.id},}") comments
      template(#hideContent) 
        .underline hide
</template>

<script lang="ts">
import Vue from "vue";
import GeneralPost from "../../components/GeneralPosts/GeneralPost.vue";
import posts from "../../mock-data/PostInfo";

export default Vue.extend({
  components: { GeneralPost },
  data() {
    return {
      posts: posts,
    };
  },
});
</script>
