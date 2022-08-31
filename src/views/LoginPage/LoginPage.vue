<template lang="pug">
.row.p-3
  .overflow-hidden.rounded-xl.mt-4.mx-auto.place-content-center.flex.flex-row.bg-black.opacity-80.p-6(class="w-3/5" style="box-shadow: 0px 3px 6px 3px rgba(0, 0, 0, 0.15), 0px 3px 3px rgba(0, 0, 0, 0.3);")
    login.mx-auto
      h1.text-center.py-2.text-white.text-3xl.uppercase.underline(style="font-weight: 700;") LOGIN
      form(method='post' action=userAction)
        .flex.flex-col.py-4.gap-4.text-white.mx-8
          input.rounded-md.outline-0.border-box.p-2.bg-gray-700.placeholder-yellow-600(style="font-weight: 700; border: 1px solid #3F3F3F;" type='text' placeholder='USERNAME')
          input.rounded-md.outline-0.border-box.p-2.bg-gray-700.placeholder-yellow-600(style="font-weight: 700; border: 1px solid #3F3F3F;" type='text' placeholder='PASSWORD')
          button.p-3.px-5.pt-2.bg-yellow-700.rounded-xl.text-black.mx-auto.w-full(style="font-weight: 700;") LOGIN
          h1.text-center.py-2.text-white.text-sm.underline Forgot your password?
    .bar.mt-4.border-white.border-r-2
    signUp.mx-auto
      h1.text-center.py-2.text-white.text-3xl.uppercase.underline(style="font-weight: 700;") SIGN UP
      form(method='post' action=userAction)
        .flex.flex-col.py-4.gap-4.text-white.mx-8
          input.rounded-md.outline-0.border-box.p-2.bg-gray-700.placeholder-yellow-600(style="font-weight: 700; border: 1px solid #3F3F3F;" type='text' placeholder='USERNAME')
          input.rounded-md.outline-0.border-box.p-2.bg-gray-700.placeholder-yellow-600(style="font-weight: 700; border: 1px solid #3F3F3F;" type='text' placeholder='PASSWORD')
          button.p-3.px-5.pt-2.bg-yellow-700.rounded-xl.text-black.mx-auto.w-full(style="font-weight: 700;") CREATE ACCOUNT
</template>
