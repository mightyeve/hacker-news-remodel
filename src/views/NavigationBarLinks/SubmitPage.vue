<template lang="pug">
.row.p-3
  .overflow-hidden.rounded-xl.mt-4.mx-auto.place-content-center.bg-black.opacity-80.p-6(class="w-3/5" style="box-shadow: 0px 3px 6px 3px rgba(0, 0, 0, 0.15), 0px 3px 3px rgba(0, 0, 0, 0.3);")
    h1.text-center.py-2.text-white.text-4xl.uppercase(style="font-weight: 700;") SUBMIT
    .bar.mx-9.mt-4.border-yellow-700.border-b-2
    form(method='post' action=userAction)
      .flex.flex-col.py-4.gap-4.text-white.mx-9
        input.rounded-md.outline-0.border-box.p-2.bg-gray-600.placeholder-white(style="border: 1px solid #3F3F3F;" type='text' placeholder='TITLE')
        .text-md Leave url blank to submit a question for discussion. If there is no url, text will appear at the top of the thread. If there is a url, text is optional.
        input.rounded-md.outline-0.border-box.p-2.bg-gray-600.text-white.placeholder-white(style="border: 1px solid #3F3F3F;" type='text' placeholder='URL')
        textarea.rounded-md.outline-0.border-box.p-2.bg-gray-600.text-white.placeholder-white(style="border: 1px solid #3F3F3F;" rows='6' placeholder='CONTENT')
        button.p-3.px-5.pt-2.bg-yellow-700.rounded-xl.text-black.mx-auto(style="font-weight: 700;" class="w-1/6") SUBMIT

</template>
