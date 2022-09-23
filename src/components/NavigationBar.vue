<template lang="pug">
.navigationBar.flex.flex-col
  .loginButton.m-2
    router-link.float-right.text-center.py-1.px-3.bg-hn-orange.rounded-xl.text-black(style="font-weight: 700;" to='/login') Login
  .text-white.pt-3.flex
    .right-nav.relative.text-center.block.h-15.overflow-hidden(class="w-1/3")
      img(src = '../assets/NavigationImages/Logo.png')
      .title.absolute.w-full.bottom-10
        router-link.text-3xl(to='/' exact='') Hacker News

    .right-nav.relative.block.h-15.overflow-hidden(class="w-2/3")
      img(src = '../assets/NavigationImages/Navigation.png').absolute
      .flex.absolute.w-full.bottom-10.gap-12.text-xl.justify-end.uppercase
        router-link.p-3(class="hover:text-light-orange active:text-light-orange focus:underline focus:text-light-orange" to='/new') New
        router-link.p-3(class="hover:text-light-orange active:text-light-orange focus:underline focus:text-light-orange" to='/past') Past
        router-link.p-3(class="hover:text-light-orange active:text-light-orange focus:underline focus:text-light-orange" to='/comments') Comments
        router-link.p-3(class="hover:text-light-orange active:text-light-orange focus:underline focus:text-light-orange" to='/ask') Ask
        router-link.p-3(class="hover:text-light-orange active:text-light-orange focus:underline focus:text-light-orange" to='/show') Show
        router-link.p-3.mr-8(class="hover:text-light-orange active:text-light-orange focus:underline focus:text-light-orange" to='/jobs') Jobs
      .flex.absolute.w-full.bottom-1.gap-12.text-lg.justify-end.uppercase
        router-link.p-3(to='/submit') Submit
        router-link.p-3(to='/') Search


</template>
