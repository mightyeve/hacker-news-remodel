<template lang="pug">
div
  .m-auto.px-7.py-2.min-h-100.overflow-hidden.py-20(class='w-2/5')
    .flex.flex-row.overflow-hidden.rounded-2xl.shadow-md.font-ropa-sans
      .bg-black.opacity-70.text-white.uppercase.p-4.text-xl(class='w-2/3')
        h1.text-center stories from: {{ getTodaysDate }}
      .bg-black.opacity-80.text-white.uppercase.p-4(class='w-1/3')
        .flex.flex-row
          img.pt-2.pr-2.h-6(src='../../assets/PostIcons/calendar.png')
          h1.text-white.uppercase.text-md.p-1.bg-light-gray.rounded change date
  
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
          router-link(:key='post.id' :to="{ name: 'reply', params: { category: 'past', id: post.id}}") comments
      template(#hideContent) 
        .underline hide
  button.block.m-auto.mt-4.py-1.px-3.bg-light-orange.rounded-2xl.text-black.font-ropa-sans.text-xl(style="font-weight: 700;" @click="loadMore") LOAD MORE

</template>

<script lang="ts">
import Vue from "vue";
import GeneralPost from "../../components/GeneralPosts/GeneralPost.vue";
import posts1 from "../../mock-data/PostInfo";
import { pastPosts } from "@/api";

export default Vue.extend({
  components: { GeneralPost },
  data() {
    return {
      posts: posts1,
      limit: 30,
      newPost: pastPosts(),
    };
  },
  computed: {
    thirtyTopPost(): any {
      // Pressing "Load More" button will reset the limit to 0 (false in ternary operator)
      // crops out 30 newPost from the array otherwise because after button, limit = 30
      return this.newPost.slice(0, this.limit);
    },
    getTodaysDate() {
      const today = new Date();
      const todayString = today.toDateString().split(" ");
      const todayFormatted =
        todayString[0] +
        ", " +
        todayString[1] +
        ". " +
        todayString[2] +
        ", " +
        todayString[3];
      return todayFormatted;
    },
  },
  methods: {
    loadMore() {
      if (this.limit > this.newPost.length) return;
      this.limit = this.limit + 30;
    },
  },
});
</script>
