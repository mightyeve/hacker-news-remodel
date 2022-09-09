<template lang="pug">
PostContainer
  div(slot='upvoteContent')
    p.text-center.text-xl.p-1.text-white
      slot(name='rank')
      img.p-4(src='../../assets/Upvote.png')
      p.text-center.text-sm.p-1.text-white
        slot(name='points')
  template(#postContentContainer)
    slot(name='postContent')
  div(slot='hide')
    slot(name='hide-enabled')

</template>

<script>
import PostContainer from "./PostContainer.vue";
export default {
  components: { PostContainer },
};
</script>
