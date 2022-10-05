<template lang="pug">
div.pt-20
  div(v-for="(post, rank) in thirtyTopPost")
    CommentContainer
      div(slot="comment")
        CommentPost
          template(#username) 
            .flex.flex-row.gap-2
              img.pr-2.pt-2.h-6(src='../../assets/PostIcons/orangeProfile.png')
              p {{ post.by }}
          template(#description)
            .flex.flex-row.gap-2
              img.pr-2.pt-1.h-5(src='../../assets/PostIcons/clock.png')
              p {{ post.time }} 
              p | Context | 
              p hide
            .flex.flex-row.gap-2
              img.pr-2.mt-4.h-3(src='../../assets/PostIcons/quote.png')
              p.py-2 on: 
              p.py-2.underline {{ post.parent }}
          template(#comment-text)
            p {{ post.text}}
  button.block.m-auto.mt-4.py-1.px-3.bg-light-orange.rounded-2xl.text-black.font-ropa-sans.text-xl(style="font-weight: 700;" @click="loadMore") LOAD MORE

  </template>

<script lang="ts">
import Vue from "vue";
import CommentPost from "../../components/CommentPosts/CommentPost.vue";
import CommentContainer from "../../components/CommentPosts/CommentContainer.vue";
import { topComments } from "@/api";

export default Vue.extend({
  components: { CommentPost, CommentContainer },
  data() {
    return {
      category: "home",
      limit: 30,
      topPost: topComments(),
    };
  },
  computed: {
    thirtyTopPost(): any {
      // Pressing "Load More" button will reset the limit to 0 (false in ternary operator)
      // crops out 30 topPost from the array otherwise because after button, limit = 30
      return this.topPost.slice(0, this.limit);
    },
  },
  methods: {
    loadMore() {
      if (this.limit > this.topPost.length) return;
      this.limit = this.limit + 30;
    },
  },
});
</script>
