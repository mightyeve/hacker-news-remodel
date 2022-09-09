<template lang="pug">
div
  h1 Comments
  CommentContainer
    div(slot="comment")
      CommentPost
        div(slot='username') George
        div(slot='description')
          p Time | Context | hide
          p parent link
        div(slot='comment-text')
          p
            | Turbo (Ryan Reynolds) is a speed-obsessed snail with an unusual dream:
            | to become the world&apos;s greatest racer. This odd snail gets a chance to
            | leave his slow-paced life behind when a freak accident gives him the
            | power of superspeed. Newly revved-up, Turbo embarks on an
            | extraordinary quest to enter and win the Indianapolis 500. Accompanied
            | by a dedicated pit crew of trash-talking adrenaline junkies, Turbo
            | becomes the ultimate underdog by refusing to let his limitations get
            | in the way of his dreams.

</template>

<script>
import CommentPost from "../../components/CommentPosts/CommentPost.vue";
import CommentContainer from "../../components/CommentPosts/CommentContainer.vue";

export default {
  components: { CommentPost, CommentContainer },
};
</script>
