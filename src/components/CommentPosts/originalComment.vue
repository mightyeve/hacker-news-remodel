<template lang="pug">
    PostContainer
      div(slot='upvoteContent')
        p.text-center.text-xl.p-1.text-white
          slot(name='rank')
          img.p-4(src='../../assets/Upvote.png')
          p.text-center.text-sm.p-1.text-white
            slot(name='points')
      div(slot='postContent')
        .text-lg.bg-gray-700.p-2.m-3.ml-0.rounded-xl
          .text-yellow-500
            slot(name='title')
        .py-1.flex.flex-row
          p(class='w-1/4')
            slot(name='time')
          p(class='3/4')
            slot(name='link')
        .pb-4.flex.flex-row
          p(class='w-1/4')
            slot(name='username')
          p(class='3/4')
            slot(name='comments')
      div(slot='hide')
        slot(name='hide-enabled')
    
    </template>

<script>
import PostContainer from "./PostContainer.vue";
export default {
  components: { PostContainer },
};
</script>
