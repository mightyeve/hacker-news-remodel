<template lang="pug">
.navigationBar.flex.flex-col
  .loginButton.m-2
    router-link.font-ropa-sans.float-right.text-center.py-1.px-3.bg-hn-orange.rounded-xl.text-black(style="font-weight: 700;" to='/login') LOGIN
  .text-white.pt-3.flex
    .right-nav.relative.text-center.block.h-15.overflow-hidden(class="w-1/3")
      img(src = '../assets/NavigationImages/Logo.png')
      .title.absolute.w-full.bottom-10
        router-link.ml-10.text-5xl.font-ropa-sans(to='/' exact='') Hacker News

    .right-nav.relative.block.h-15.overflow-hidden.font-advent-pro(class="w-2/3")
      img(src = '../assets/NavigationImages/Navigation.png').absolute
      .flex.absolute.my-2.w-full.bottom-10.gap-12.text-2xl.justify-end.uppercase
        router-link.p-3(class="hover:text-light-orange active:text-light-orange focus:underline focus:text-light-orange" to='/new') New
        router-link.p-3(class="hover:text-light-orange active:text-light-orange focus:underline focus:text-light-orange" to='/past') Past
        router-link.p-3(class="hover:text-light-orange active:text-light-orange focus:underline focus:text-light-orange" to='/comments') Comments
        router-link.p-3(class="hover:text-light-orange active:text-light-orange focus:underline focus:text-light-orange" to='/ask') Ask
        router-link.p-3(class="hover:text-light-orange active:text-light-orange focus:underline focus:text-light-orange" to='/show') Show
        router-link.p-3.mr-8(class="hover:text-light-orange active:text-light-orange focus:underline focus:text-light-orange" to='/jobs') Jobs
      .flex.absolute.w-full.bottom-1.gap-12.text-xl.pr-8.justify-end.uppercase
        .flex.flex-row.px-3.py-1.my-2.bg-light-gray.rounded-3xl.text-light-orange
          img.pr-2.h-5.mt-1(src='../assets/NavigationImages/SubmitIcon.png')
          router-link(to='/submit') Submit
        .flex.flex-row.px-3.py-1.my-2.bg-light-gray.rounded-3xl.text-light-orange(class='w-1/3')
          img.pr-2.h-5.mt-1(src='../assets/NavigationImages/SubmitIcon.png')
          a(href="https://hn.algolia.com/?dateRange=all&page=0&prefix=false&query=&sort=byPopularity&type=story") Search


</template>
