<template lang="pug">
PostContainer.font-advent-pro.font-bold
    template(#upvoteContentContainer)
        p.text-center.text-2xl.p-1.text-white
            slot(name='rank')
            img.p-4(src='../../assets/Upvote.png')
            p.text-center.text-lg.p-1.text-white
                slot(name='points')
    template(#postContentContainer)
        h1.m-1.mt-3.text-xl.text-white.uppercase
            slot(name="title")
        .text-lg.bg-light-gray.p-2.m-3.ml-0.rounded-xl
            .text-light-orange
                slot(name='text')
        .pt-1.pl-1.pb-5.flex.flex-row
            p(class='w-1/3')
                slot(name='username')
            p(class='w-1/3')
                slot(name='time')
            p(class='w-1/3')
                slot(name='comments')

</template>

<script>
import PostContainer from "./PostContainer.vue";
export default {
  components: { PostContainer },
};
</script>
