<template lang="pug">
.w-full.m-auto.px-7.py-2.min-h-100.overflow-hidden
    .font-ropa-sans.bg-black.w-full.pt-2.pl-4.pb-4.text-white.overflow-hidden.rounded-3xl.shadow-md(style="opacity: 0.85;")
        .text-xl.font-bold.bg-light-gray.p-2.m-3.ml-0.rounded-xl
            .text-light-orange
                slot(name='title')
        .py-1.flex.flex-row.pl-2.text-xl
            p(class='w-1/4')
                slot(name='time')
            p(class='3/4')
                slot(name='link')
</template>
