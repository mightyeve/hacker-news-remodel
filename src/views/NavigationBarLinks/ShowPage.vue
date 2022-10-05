<template lang="pug">
div
  div.pt-20
    div(v-for="(post, rank) in thirtyTopPost")
      GeneralPost.text-xl
        template(#rank)
          p.text-center.text-xl.p-1.text-white {{ (rank + 1) + "."}}
        template(#points) {{post.score  + " pts"}}
        template(#title) {{ post.title}}
        template(#time) 
          .flex.flex-row
            img.pr-2.pt-1.h-5(src='../../assets/PostIcons/clock.png')
            p {{ post.time}}
        template(#username) 
          .flex.flex-row
            img.pr-2.pt-1.h-5(src='../../assets/PostIcons/profile.png')
            p {{ post.by }}
        template(#link v-if='post.url') 
          .flex.flex-row(class="hover:text-hn-orange")
            img.pr-2.pt-1.h-5(src='../../assets/PostIcons/link.png')
            a(:href="post.url") {{ post.url }}
        template(#comments)
          .flex.flex-row(class="hover:text-hn-orange")
            img.pr-2.pt-1.h-5(src='../../assets/PostIcons/comment.png')
            router-link(:key='post.id' :to="{ name: 'reply', params: { category: 'show', id: post.id}}") comments
        template(#hideContent) 
          .underline hide
  button.block.m-auto.mt-4.py-1.px-3.bg-light-orange.rounded-2xl.text-black.font-ropa-sans.text-xl(style="font-weight: 700;" @click="loadMore") LOAD MORE
  
  </template>

<script lang="ts">
import Vue from "vue";
import GeneralPost from "../../components/GeneralPosts/GeneralPost.vue";
import posts1 from "../../mock-data/PostInfo";
import { topPosts as showPosts } from "@/api";

export default Vue.extend({
  components: { GeneralPost },
  data() {
    return {
      category: "top",
      posts: posts1,
      limit: 30,
      showPost: showPosts(),
    };
  },
  computed: {
    thirtyTopPost(): any {
      // Pressing "Load More" button will reset the limit to 0 (false in ternary operator)
      // crops out 30 topPost from the array otherwise because after button, limit = 30
      return this.showPost.slice(0, this.limit);
    },
  },
  methods: {
    loadMore() {
      if (this.limit > this.showPost.length) return;
      this.limit = this.limit + 30;
    },
  },
});
</script>
