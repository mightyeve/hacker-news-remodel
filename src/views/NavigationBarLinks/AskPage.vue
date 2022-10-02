<template lang="pug">
div
  div(v-for="(post, rank) in thirtyTopPost")
    AskPost
      template(#rank) {{ (rank + 1) + "."}}
      template(#points) {{ post.score }}
      // can't find indicator
      template(#type) {{ post.type }}
      template(#title) {{ post.title }}
      template(#time) 3 hours ago
      template(#username) kevinak
      template(#comments)
        router-link(to='/reply') comments

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
