<template lang="pug">
div
  h1 Jobs

  .m-auto.px-7.py-2.min-h-100.overflow-hidden(class='w-1/2')
    .overflow-hidden.rounded-2xl.shadow-md
      .bg-black.opacity-80.text-white.p-4.w-full
        h1.text-white.text-center.text-lg These jobs are at YC startups. See more at ycombinator.com/jobs

  JobsPost
    template(#rank) 1.
    template(#points) 178 pts
    template(#title)
      | The impact of removing jQuery on our web performance
    template(#time) 3 hours ago
    template(#link) link.com
</template>

<script>
import JobsPost from "../../components/GeneralPosts/JobsPost.vue";
export default {
  components: { JobsPost },
};
</script>
