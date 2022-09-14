<template lang="pug">
.w-full.m-auto.px-7.py-2.min-h-100.overflow-hidden
  .flex.flex-row.overflow-hidden.rounded-3xl.shadow-md
    .bg-black.opacity-70.p-1(class='w-1/12')
      .w-full.h-auto.border-4.border-transparent.p-1.overflow-hidden
        slot(name='upvoteContentContainer')
    .bg-black.opacity-80.w-full.text-left.pl-3.text-white
      slot(name='postContentContainer')
    .bg-black.opacity-80.pt-5.pr-4.text-white(class='w-1/16')
      slot(name='hideContentContainer')

</template>
