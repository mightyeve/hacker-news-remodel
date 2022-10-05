<template lang="pug">

.flex.flex-row.pb-4
    .w-12
        .rounded-xl.w-full.h-auto.border-light-gray.bg-light-gray.border-4.p-1.overflow-hidden
            img(src='../../assets/Upvote.png')
    .w-full.info.text-left.pl-3.text-white
        .text-light-orange.text-xl.font-advent-pro.font-extrabold
            slot(name='username')
        .py-1.text-lg.font-ropa-sans
            slot(name='description')
        .text-sm.p-5.mr-8.rounded-xl.text-lg.bg-light-gray.p-2.m-3.ml-0.rounded-xl.font-advent-pro.font-bold
            slot(name='comment-text')
        .pt-2
            slot(name='reply-button')
</template>
