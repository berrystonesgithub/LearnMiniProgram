// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type: Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    curIndex: 0 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabTap(event){
      //1.获取当前点击的index
      const index = event.currentTarget.dataset.index;

      //2.改变curindex
      this.setData({
        curIndex : index
      })

      //3.向外传递事件
      this.triggerEvent("tabTap",{index},{})
    }
  }
})
