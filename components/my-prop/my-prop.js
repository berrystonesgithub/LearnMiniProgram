// components/my-prop/my-prop.js
Component({

  properties: {
    // title: String
    title: {
      type: String,
      value: "我是默认标题",
      observer: function(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    },
    content: {
      type: String,
      value: "我是默认内容"
    }
  },
  externalClasses:[
    'titleclass'
  ]
})