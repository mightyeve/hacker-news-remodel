<template lang="pug">
div.text-white
  .relative
    img(src = '../assets/FooterImages/Footer.png')

    .flex.flex-row.gap-3.right-20.absolute.text-xl.bottom-20
      img(src = '../assets/FooterImages/line.png')
      .flex.flex-col.gap-6.uppercase
        a(href="https://news.ycombinator.com/newsguidelines.html") Guidelines
        a(href="https://news.ycombinator.com/newsguidelines.html") FAQ 
        a(href="https://news.ycombinator.com/lists") Lists
        a(href="https://github.com/HackerNews/APIl") API
        a(href="https://news.ycombinator.com/security.html") Security 
        a(href="http://www.ycombinator.com/legal/") Legal

    .flex.flex-row.uppercase
      a.mt-5.absolute.text-xl.text-white.p-2.border.border-white.mr-3(class='top-2/3 right-1/2 -translate-x-1/2 -translate-y-1/2' href="http://www.ycombinator.com/apply/") Apply To YC
      h2.mt-5.absolute.text-md(class='top-2/3 left-1/2 w-1/6 -translate-x-1/2 -translate-y-1/2') Applications are open for YC Winter 2023
    .flex.justify-center.uppercase
      a.absolute.text-xl.text-white.p-2.border.border-white.bottom-10(class='w-1/12' href="http://www.ycombinator.com/apply/") Contact


</template>
