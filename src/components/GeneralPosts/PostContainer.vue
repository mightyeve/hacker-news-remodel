<template lang="pug">
.w-full.m-auto.px-7.py-2.min-h-100.overflow-hidden
  .flex.flex-row.overflow-hidden.rounded-3xl.shadow-md
    .bg-black.opacity-70.p-1(class='w-1/12')
      .w-full.h-auto.border-4.border-transparent.p-1.overflow-hidden
        slot(name='upvoteContentContainer')
    .bg-black.w-full.text-left.pl-3.text-white(style="opacity: 0.85;")
      slot(name='postContentContainer')
    .bg-black.pt-5.pr-4.text-white(style="opacity: 0.85;" class='w-1/16')
      slot(name='hideContentContainer')

</template>
