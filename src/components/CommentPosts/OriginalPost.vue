<template lang="pug">
OriginalContainer
  template(#upvoteContent)
    p.text-center.text-xl.p-1.text-white
      slot(name='rank')
      img.p-4(src='../../assets/Upvote.png')
      p.text-center.text-sm.p-1.text-white
        slot(name='points')
  template(#postContent)
    .text-lg.bg-gray-700.p-2.m-3.ml-0.rounded-xl
      .text-yellow-500
        slot(name='title')
    .py-1.flex.flex-row.gap-60
      p(class='w-1/4')
        slot(name='time')
      p(class='w-2/4')
        slot(name='link')
      p(class='w-2/4')
        slot(name='past')
    .py-1.flex.flex-row.gap-60
      p(class='w-1/4')
        slot(name='username')
      p(class='w-2/4')
        slot(name='comments')
      p(class='w-2/4')
        slot(name='favorite')
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
