<template lang="pug">
div
  h1 Hacker News Home Page
  div(v-for="widget in widgets")
    GeneralPost
      //
        template(#rank) 
          h1 {{ widget.rank }}.
        template(slot='points') 178 pts
        template(slot='title')
          h1 {{ widget.title }}
        template(slot='time') 3 hours ago
        template(slot='link') insidegovuk.blog.gov.uk
        template(slot='username') kevinak
        template(slot='hide-enabled') hide
        template(slot='comments')
          router-link(to='/reply') comments
      template(#postContent)
        .text-lg.bg-gray-700.p-2.m-3.ml-0.rounded-xl
          .text-yellow-500
            h1 {{ widget.title }}
        .py-1.flex.flex-row
          p(class='w-1/4')
            h1 {{ widget.title }}
          p(class='3/4')
            h1 {{ widget.title }}
        .pb-4.flex.flex-row
          p(class='w-1/4')
            h1 {{ widget.title }}
          p(class='3/4')
            h1 {{ widget.title }}
</template>

<script lang="ts">
import Vue from "vue";
import GeneralPost from "../../components/GeneralPosts/GeneralPost.vue";
import widgets from "../../mock-data/widgets";
export default Vue.extend({
  components: { GeneralPost },
  data() {
    return {
      widgets: widgets,
    };
  },
});
</script>
