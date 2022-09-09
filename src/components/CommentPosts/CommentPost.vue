<template lang="pug">

.flex.flex-row.pb-4
    .w-12
        .rounded-xl.w-full.h-auto.border-gray-700.bg-gray-700.border-4.p-1.overflow-hidden
            img(src='../../assets/Upvote.png')
    .w-full.info.text-left.pl-3.text-white
        .text-yellow-500.text-sm
            slot(name='username')
        .py-1
            slot(name='description')
        .text-sm.bg-gray-700.p-2.mr-3.rounded-xl
            slot(name='comment-text')
        .pt-2
            slot(name='reply-button')
</template>
