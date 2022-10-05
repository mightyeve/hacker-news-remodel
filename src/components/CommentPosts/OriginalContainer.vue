<template lang="pug">
.w-full.m-auto.px-7.py-2.min-h-100.font-advent-pro.text-xl
    .rounded-lg.overflow-hidden
        .flex.flex-row.overflow-hidden.shadow-md
            .bg-black.opacity-70.p-1(class='w-1/12')
                .w-full.h-auto.border-4.border-transparent.p-1.overflow-hidden
                    slot(name='upvoteContent')
            .bg-black.w-full.text-left.pl-3.text-white(style="opacity:0.85;")
                slot(name='postContent')
            .bg-black.pt-5.pr-4.text-white(class='w-1/16' style="opacity:0.85;")
                slot(name='hide')
        .bar.border-gray-500.border-b-2
        .bg-black.pb-6.pt-8(style="opacity:0.85;")
            slot(name='replyForm')
</template>
