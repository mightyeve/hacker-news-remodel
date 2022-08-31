<template lang="pug">
PostContainer
    div(slot='upvoteContent')
        p.text-center.text-xl.p-1.text-white
            slot(name='rank')
            img.p-4(src='../../assets/Upvote.png')
            p.text-center.text-sm.p-1.text-white
                slot(name='points')
    div(slot='postContent')
        h1.m-1.mt-3.text-xl.text-white.uppercase
            slot(name="type")
        .text-lg.bg-gray-700.p-2.m-3.ml-0.rounded-xl
            .text-yellow-500
                slot(name='title')
        .pt-1.pb-5.flex.flex-row
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
