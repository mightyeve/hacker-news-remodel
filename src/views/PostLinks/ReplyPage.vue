<template lang="pug">
.comment
  template(v-if='loading')
    .spinner SPUN SPUN
    // here use a loaded you prefer
  template(v-else)
    | {{ rows }}
    OriginalPost(v-if='post')
      div(slot='points') {{ post.score  + " pts"}}
      div(slot='title') {{ post.title }}
      div(slot='time') {{ post.time + " hours ago"}}
      div(slot='link') {{ post.link }}
      div(slot='username') {{ post.username }}
      div(slot='comments') comments
      div(slot='hide-enabled') hide
      div(slot='past') Past
      div(slot='favorite') Favorite
      div(slot='reply')
        form.flex.flex-col(method='post' action=userAction)
          textarea.m-6.rounded-md.outline-0.border-box.p-2.bg-gray-600.text-white.placeholder-white(style="border: 1px solid #3F3F3F;" rows='6' placeholder='Comment...')
          button.p-3.px-5.pt-2.bg-yellow-700.rounded-xl.text-black.ml-6(style="font-weight: 700;" class="w-1/6") SUBMIT COMMENT
    CommentContainer(v-for='postComment in commentsArray')
      template(#comment)
        CommentPost
          div(slot='username') {{ postComment.by }}
          div(slot='description')
            p 1 hour ago  |  hide 
          div(slot='comment-text')
            p {{postComment.text}}
          div(slot='reply-button')
            button.p-2.pt-1.bg-yellow-700.rounded-xl.text-black.text-sm(style="font-weight: 700;") REPLY
</template>

<script lang="ts">
import Vue from "vue";
import CommentPost from "../../components/CommentPosts/CommentPost.vue";
import CommentContainer from "../../components/CommentPosts/CommentContainer.vue";
import OriginalPost from "../../components/CommentPosts/OriginalPost.vue";
import PostInfo from "../../mock-data/PostInfo";
import { pastPosts, newPosts, topPosts, getPostComment } from "@/api";
export default Vue.extend({
  components: { OriginalPost, CommentPost, CommentContainer },
  props: {
    id: { type: Number, required: true },
    category: { type: String, required: true },
  },
  computed: {
    post: function (): any {
      //return PostInfo.find((element) => element.id === this.id);
      const postArray = this.postCategory();
      return postArray.find((element) => element.id === this.id);
    },
  },
  data() {
    return {
      commentsArray: [] as any[],
      newPosts: newPosts(),
      topPosts: topPosts(),
      pastPosts: pastPosts(),
      loading: false,
      rows: [],
    };
  },
  created() {
    //this.getDataFromApi();

    this.loader();
  },
  methods: {
    /*getDataFromApi(): any {
      this.loading = true;
      fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then((response) => {
          this.loading = false;
          this.rows = "hello";
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },*/
    async getCommentsArray() {
      this.commentsArray = await getPostComment(this.id);
      this.loading = false;
    },
    loader() {
      this.loading = true;
      this.getCommentsArray();
    },
    postCategory() {
      if (this.category === "top") {
        return this.topPosts;
      } else if (this.category === "new") {
        console.log("new");
        return this.newPosts;
      } else if (this.category === "past") {
        return this.pastPosts;
      }
    },
  },
});
</script>
