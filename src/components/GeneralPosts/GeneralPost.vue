<template lang="pug">
PostContainer.font-ropa-sans
  template(#upvoteContentContainer)
    p.text-center.text-xl.p-1.text-white
      slot(name='rank')
      img.p-4(src='../../assets/Upvote.png')
      p.text-center.text-md.p-1.text-white
        slot(name='points')
  template(#postContentContainer)
    .text-xl.bg-light-gray.p-2.m-3.ml-0.rounded-xl.font-advent-pro.font-extrabold
      .text-light-orange
        slot(name='title')
    .py-1.pl-2.flex.flex-row
      p(class='w-1/4') 
        slot(name='time')
      p(class='3/4') 
        slot(name='username')
    .pb-4.pl-2.flex.flex-row
      p(class='w-1/4') 
        slot(name='comments')
      p(class='w-3/4') 
        slot(name='link')
  template(#hideContentContainer)
    slot(name='hideContent')

</template>

<script>
import PostContainer from "./PostContainer.vue";
export default {
  components: { PostContainer },
};
</script>
