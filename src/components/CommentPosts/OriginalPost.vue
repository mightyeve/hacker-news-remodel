<template lang="pug">
OriginalContainer
  template(#upvoteContent)
    p.text-center.p-1.text-white
      slot(name='rank')
      img.p-4(src='../../assets/Upvote.png')
      p.text-center.p-1.text-white
        slot(name='points')
  template(#postContent)
    .text-2xl.bg-light-gray.p-2.m-3.ml-0.rounded-xl
      .text-light-orange.font-semibold
        slot(name='title')
    .py-1.grid.grid-cols-4.gap-4
      slot(name='time')
      slot(name='favorite')
      slot(name='past')
      slot(name='comments')
    .py-5.grid.grid-cols-4.gap-4
      slot(name='username')
      .col-span-3
        slot(name='link')
  template(#hide)
    slot(name='hide-enabled')
  template(#replyForm)
    slot(name='reply')
    
</template>
<script>
import OriginalContainer from "./OriginalContainer.vue";
export default {
  components: { OriginalContainer },
};
</script>
