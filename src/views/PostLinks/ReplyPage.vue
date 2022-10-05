<template lang="pug">
.comment.pt-20
  template
    OriginalPost(v-if='post')
      div(slot='points') {{ post.score  + " pts"}}
      div(slot='title') {{ post.title }}
        div(v-if='post.text') 
          p.text-white.text-lg {{ decodeHtml(post.text) }}
      div(slot='time') 
        .flex.flex-row
            img.pr-2.pt-1.h-5(src='../../assets/PostIcons/clock.png')
            p {{ post.time}}
      div(slot='link' v-if='post.url') 
        .flex.flex-row(class="hover:text-hn-orange")
            img.pr-2.pt-1.h-5(src='../../assets/PostIcons/link.png')
            a(:href="post.url") {{post.url}}
      div(slot='username') 
        .flex.flex-row
          img.pr-2.pt-1.h-5(src='../../assets/PostIcons/profile.png')
          p {{ post.by }} 
      div(slot='comments') 
        .flex.flex-row
            img.pr-2.pt-1.h-5(src='../../assets/PostIcons/comment.png')
            p comments
      div(slot='hide-enabled') hide
      div(slot='past')
        .flex.flex-row
          img.pr-2.pt-1.h-5(src='../../assets/PostIcons/past.png')
          p past
      div(slot='favorite') 
        .flex.flex-row
              img.pr-2.pt-1.h-5(src='../../assets/PostIcons/favorite.png')
              p Favorite
      div(slot='reply')
        form.flex.flex-col(method='post' action=userAction)
          textarea.m-6.rounded-md.outline-0.border-box.p-2.bg-light-gray.text-white.placeholder-white(style="border: 1px solid #3F3F3F;" rows='6' placeholder='Comment...')
          button.p-2.px-2.pt-2.bg-light-orange.rounded-xl.text-black.ml-6(style="font-weight: 700;" class="w-1/6") SUBMIT COMMENT
    CommentContainer(v-for='postComment in commentsArray')
      template(#comment)
        CommentPost
          div(slot='username') {{ postComment.by }}
          div(slot='description')
            p 1 hour ago  |  hide 
          div(slot='comment-text')
            p {{decodeHtml(postComment.text)}}
          div(slot='reply-button')
            button.p-2.pt-1.bg-light-orange.rounded-xl.text-black.text-sm(style="font-weight: 700;") REPLY
</template>

<script lang="ts">
import Vue from "vue";
import CommentPost from "../../components/CommentPosts/CommentPost.vue";
import CommentContainer from "../../components/CommentPosts/CommentContainer.vue";
import OriginalPost from "../../components/CommentPosts/OriginalPost.vue";
import {
  showPosts,
  askPosts,
  pastPosts,
  newPosts,
  topPosts,
  getPostComment,
} from "@/api";
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
      if (postArray) {
        return postArray.find((element) => element.id === this.id);
      }
      return "error";
    },
  },
  data() {
    return {
      commentsArray: [] as any[],
      newPosts: newPosts(),
      topPosts: topPosts(),
      pastPosts: pastPosts(),
      askPosts: askPosts(),
      showPosts: showPosts(),
    };
  },
  methods: {
    decodeHtml(html) {
      // create an HTML div element
      const txt = document.createElement("div");

      // grab HTML markup from post.text
      txt.innerHTML = html;

      // grab text from the HTML
      // innerText returns the visible text
      return txt.innerText;
    },
    async getCommentsArray() {
      this.commentsArray = await getPostComment(this.id);
    },
    postCategory() {
      if (this.category === "top") {
        return this.topPosts;
      } else if (this.category === "new") {
        return this.newPosts;
      } else if (this.category === "past") {
        return this.pastPosts;
      } else if (this.category === "ask") {
        return this.askPosts;
      } else if (this.category === "show") {
        return this.showPosts;
      }
    },
  },
});
</script>
