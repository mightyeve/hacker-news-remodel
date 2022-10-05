<template lang="pug">
div.pt-20
  div(v-for="(post, rank) in thirtyTopPost")
    AskPost
      template(#rank) {{ (rank + 1) + "."}}
      template(#points) {{post.score  + " pts"}}
      // can't find indicator
      template(#title) {{ post.title }}
      template(#text v-if='post.text')  {{ post.text }}
      template(#time) 
        .flex.flex-row
          img.pr-2.pt-1.h-5(src='../../assets/PostIcons/clock.png')
          p {{ post.time}}
      template(#username)
        .flex.flex-row
            img.pr-2.pt-1.h-5(src='../../assets/PostIcons/profile.png')
            p {{ post.by }}
      template(#comments)
        .flex.flex-row(class="hover:text-hn-orange")
          img.pr-2.pt-1.h-5(src='../../assets/PostIcons/comment.png')
          router-link(:key='post.id' :to="{ name: 'reply', params: { category: 'ask', id: post.id}}") comments
  button.block.m-auto.mt-4.py-1.px-3.bg-light-orange.rounded-2xl.text-black.font-ropa-sans.text-xl(style="font-weight: 700;" @click="loadMore") LOAD MORE

</template>

<script lang="ts">
import Vue from "vue";
import AskPost from "../../components/GeneralPosts/AskPost.vue";
import posts1 from "../../mock-data/PostInfo";
import { askPosts } from "@/api";

export default Vue.extend({
  components: { AskPost },
  data() {
    return {
      posts: posts1,
      limit: 30,
      askPost: askPosts(),
    };
  },
  computed: {
    thirtyTopPost(): any {
      // Pressing "Load More" button will reset the limit to 0 (false in ternary operator)
      // crops out 30 topPost from the array otherwise because after button, limit = 30
      return this.askPost.slice(0, this.limit);
    },
  },
  methods: {
    loadMore() {
      if (this.limit > this.askPost.length) return;
      this.limit = this.limit + 30;
    },
  },
});
</script>
