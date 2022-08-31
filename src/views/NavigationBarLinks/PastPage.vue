<template lang="pug">
div
  h1 Past Page

  .m-auto.px-7.py-2.min-h-100.overflow-hidden(class='w-2/5')
    .flex.flex-row.overflow-hidden.rounded-2xl.shadow-md
      .bg-black.opacity-70.text-white.uppercase.p-4(class='w-2/3')
        h1.text-lg stories from: august 15, 2022
      .bg-black.opacity-80.text-white.uppercase.p-4(class='w-1/3')
        h1.text-white.uppercase change date

  GeneralPost
    div(slot='rank') 1.
    div(slot='points') 178 pts
    div(slot='title')
      | The impact of removing jQuery on our web performance
    div(slot='time') 3 hours ago
    div(slot='link') insidegovuk.blog.gov.uk
    div(slot='username') kevinak
    div(slot='comments') comment
    div(slot='hide-enabled') hide
</template>

<script>
import GeneralPost from "../../components/GeneralPosts/GeneralPost.vue";
export default {
  components: { GeneralPost },
};
</script>
