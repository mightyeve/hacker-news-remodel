<template lang="pug">
div  
  .m-auto.px-7.py-2.min-h-100.overflow-hidden.py-20.font-advent-pro(class='w-1/2')
    .overflow-hidden.rounded-2xl.shadow-md
      .bg-black.opacity-80.text-white.p-4.w-full
        h1.text-white.text-center.text-xl These jobs are at YC startups. See more at ycombinator.com/jobs
  div(v-for="(post, rank) in thirtyTopPost")
    JobsPost
      template(#title) {{ post.title }}
      template(#time)
        .flex.flex-row
          img.pr-2.pt-1.h-5(src='../../assets/PostIcons/clock.png')
          p {{ post.time}}
      template(#link v-if='post.url')
        .flex.flex-row(class="hover:text-hn-orange")
          img.pr-2.pt-1.h-5(src='../../assets/PostIcons/link.png')
          a(:href="post.url") {{ post.url }}
  button.block.m-auto.mt-4.py-1.px-3.bg-light-orange.rounded-2xl.text-black.font-ropa-sans.text-xl(style="font-weight: 700;" @click="loadMore") LOAD MORE

  </template>

<script lang="ts">
import Vue from "vue";
import JobsPost from "../../components/GeneralPosts/JobsPost.vue";
import { jobPosts } from "@/api";

export default Vue.extend({
  components: { JobsPost },
  data() {
    return {
      limit: 30,
      jobPost: jobPosts(),
    };
  },
  computed: {
    thirtyTopPost(): any {
      // Pressing "Load More" button will reset the limit to 0 (false in ternary operator)
      // crops out 30 topPost from the array otherwise because after button, limit = 30
      return this.jobPost.slice(0, this.limit);
    },
  },
  methods: {
    loadMore() {
      if (this.limit > this.jobPost.length) return;
      this.limit = this.limit + 30;
    },
  },
});
</script>
