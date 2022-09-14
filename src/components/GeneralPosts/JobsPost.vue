<template lang="pug">
.w-full.m-auto.px-7.py-2.min-h-100.overflow-hidden
    .bg-black.opacity-80.w-full.pl-3.pb-4.text-white.overflow-hidden.rounded-3xl.shadow-md
        .text-lg.bg-gray-700.p-2.m-3.ml-0.rounded-xl
            .text-yellow-500
                slot(name='title')
        .py-1.flex.flex-row.pl-2
            p(class='w-1/4')
                slot(name='time')
            p(class='3/4')
                slot(name='link')
</template>
