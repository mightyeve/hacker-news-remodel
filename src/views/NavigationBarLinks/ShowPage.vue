<template lang="pug">
div
  h1 Show Page
  GeneralPost
    div(slot='rank') 1.
    div(slot='points') 178 pts
    div(slot='title')
      | The impact of removing jQuery on our web performance
    div(slot='time') 3 hours ago
    div(slot='link') insidegovuk.blog.gov.uk
    div(slot='username') kevinak
    div(slot='comments') comment

</template>

<script>
import GeneralPost from "../../components/GeneralPosts/GeneralPost.vue";
export default {
  components: { GeneralPost },
};
</script>
