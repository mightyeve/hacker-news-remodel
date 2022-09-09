<template lang="pug">
.w-full.m-auto.px-7.py-2.min-h-100
    .rounded-lg.overflow-hidden
        .flex.flex-row.overflow-hidden.shadow-md
            .bg-black.opacity-70.p-1(class='w-1/12')
                .w-full.h-auto.border-4.border-transparent.p-1.overflow-hidden
                    slot(name='upvoteContent')
            .bg-black.opacity-80.w-full.text-left.pl-3.text-white
                slot(name='postContent')
            .bg-black.opacity-80.pt-5.pr-4.text-white(class='w-1/16')
                slot(name='hide')
        .bar.border-gray-500.border-b-2
        .bg-black.opacity-80.pb-6
            slot(name='replyForm')
</template>
