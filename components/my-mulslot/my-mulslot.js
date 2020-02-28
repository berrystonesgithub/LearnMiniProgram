// components/my-mulslot/my-mulslot.js
Component({
  //----------让使用者可以给组件传入一些数据----------
  properties: {
    title: {
      type: String,
      value: " "
    }
  },

  //----------定义组件内部的初始化数据-----------
  data: {

  },

  //--------------- 定义组件内部的函数 -----------------
  methods: {
    foo() {

    }
  },

  //----------------------定义组件的配置选项-----------------------
  //mutipleSlots在用多插槽的时候需要设置为true
  //styleIsolation:设置样式的隔离方式
  options: {
    multipleSlots: true
  },

  //-----------------外界给组件传入额外的样式-----------------------
  externalClasses:[],

  //-----------------监听properties/data的改变-----------------------
  observers:{
    counter: function(newval){

    }
  },

  //----------------- 组件中监听生命周期 -----------------------
  // 1.监听组件的生命周期
  pageLifetimes:{
    show(){
      console.log('监听组件所在页面显示出来时');
    },
    hide(){
      console.log('监听组件所在页面隐藏时');
    },
    resize(){
      console.log('监听页面尺寸的变化');
    }
  },

  // 2.监听页面的生命周期
  lifetimes:{
    created(){
      console.log('组件被创建');
    },
    moved() {
      console.log('组件被移动');
    },
    attached() {
      console.log('组件被添加');
    },
    ready(){
      console.log('组件被渲染');
    },
    detached(){
      console.log('组件被移除');
    }

  }
})


