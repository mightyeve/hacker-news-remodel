<template lang="pug">

comment
  OriginalPost
    div(slot='rank') 1.
    div(slot='points') 100 pts
    div(slot='title') “Quantum-Safe” Crypto Hacked by 10-Year-Old PC
    div(slot='time') 2 hours ago
    div(slot='link') ieee.org
    div(slot='username') oipoloi
    div(slot='comments') 52 comments
    div(slot='hide-enabled') hide
    div(slot='past') Past
    div(slot='favorite') Favorite
    div(slot='reply')
      form.flex.flex-col(method='post' action=userAction)
        textarea.m-6.rounded-md.outline-0.border-box.p-2.bg-gray-600.text-white.placeholder-white(style="border: 1px solid #3F3F3F;" rows='6' placeholder='Comment...')
        button.p-3.px-5.pt-2.bg-yellow-700.rounded-xl.text-black.ml-6(style="font-weight: 700;" class="w-1/6") SUBMIT COMMENT
  
  CommentContainer
    div(slot="comment")
      CommentPost
        div(slot='username') George
        div(slot='description')
          p 1 hour ago  |  hide 
        div(slot='comment-text')
          p
          | Turbo (Ryan Reynolds) is a speed-obsessed snail with an unusual dream:
          | to become the world&apos;s greatest racer. This odd snail gets a chance to
          | leave his slow-paced life behind when a freak accident gives him the
          | power of superspeed. Newly revved-up, Turbo embarks on an
          | extraordinary quest to enter and win the Indianapolis 500. Accompanied
          | by a dedicated pit crew of trash-talking adrenaline junkies, Turbo
          | becomes the ultimate underdog by refusing to let his limitations get
          | in the way of his dreams.
        div(slot='reply-button')
          button.p-2.pt-1.bg-yellow-700.rounded-xl.text-black.text-sm(style="font-weight: 700;") REPLY

      CommentPost.pl-14
        div(slot='username') Cliffe
        div(slot='description')
          p 1 hour ago  |  hide 
        div(slot='comment-text')
          p
            | Turbo (Ryan Reynolds) is a speed-obsessed snail with an unusual dream:
            | to become the world&apos;s greatest racer. This odd snail gets a chance to
            | leave his slow-paced life behind when a freak accident gives him the
            | power of superspeed. Newly revved-up, Turbo embarks on an
            | extraordinary quest to enter and win the Indianapolis 500. Accompanied
            | by a dedicated pit crew of trash-talking adrenaline junkies, Turbo
            | becomes the ultimate underdog by refusing to let his limitations get
            | in the way of his dreams.
        div(slot='reply-button')
          button.p-2.pt-1.bg-yellow-700.rounded-xl.text-black.text-sm(style="font-weight: 700;") REPLY

</template>
<script>
import CommentPost from "../../components/CommentPosts/CommentPost.vue";
import CommentContainer from "../../components/CommentPosts/CommentContainer.vue";
import OriginalPost from "../../components/CommentPosts/OriginalPost.vue";
export default {
  components: { OriginalPost, CommentPost, CommentContainer },
};
</script>
