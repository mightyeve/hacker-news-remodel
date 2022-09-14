<template lang="pug">
.navigationBar.flex.flex-col
  .justify-end
    button.p-5.px-5.pt-2.bg-yellow-700.rounded-xl.text-white.mx-auto(style="font-weight: 700;" class="w-1/6")
      router-link(to='/login') Login
  .text-white.pt-5.flex
    .right-nav.relative.text-center.block.h-15.overflow-hidden(class="w-1/3")
      img(src = '../assets/NavigationImages/Logo.png')
      .title.absolute.w-full.bottom-10
        router-link.text-3xl(to='/' exact='') Hacker News

    .right-nav.relative.block.h-15.overflow-hidden(class="w-2/3")
      img(src = '../assets/NavigationImages/Navigation.png').absolute
      .flex.absolute.w-full.bottom-10.gap-12.text-xl.justify-end.uppercase
        router-link.p-3(to='/new') New
        router-link.p-3(to='/past') Past
        router-link.p-3(to='/comments') Comments
        router-link.p-3(to='/ask') Ask
        router-link.p-3(to='/show') Show
        router-link.p-3.mr-8(to='/jobs') Jobs
      .flex.absolute.w-full.bottom-1.gap-12.text-lg.justify-end.uppercase
        router-link.p-3(to='/submit') Submit
        router-link.p-3(to='/') Search


</template>
