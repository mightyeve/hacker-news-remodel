<template lang="pug">
div
  h1 Past Page

  .m-auto.px-7.py-2.min-h-100.overflow-hidden(class='w-2/5')
    .flex.flex-row.overflow-hidden.rounded-2xl.shadow-md
      .bg-black.opacity-70.text-white.uppercase.p-4(class='w-2/3')
        h1.text-md.text-center stories from: august 15, 2022
      .bg-black.opacity-80.text-white.uppercase.p-4(class='w-1/3')
        h1.text-white.uppercase change date
  
  div(v-for="post in posts")
    GeneralPost
      template(#rank)
        p.text-center.text-xl.p-1.text-white {{ post.rank + "."}}
      template(#points) {{post.points  + " pts"}}
      template(#title) {{ post.title}}
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
