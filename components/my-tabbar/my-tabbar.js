// components/my-tabbar/my-tabbar.js
Component({
  properties: {
    titles: {
      type: Array,
      value: [
        "Tab1",
        "Tab2",
        "Tab3"
      ]
    }
  },

  data: {
    curIndex: 0
  },

  methods: {
    handleTabTap(event) {
      //1.获取传入的index
      const index = event.currentTarget.dataset.index;

      //2.改变记录的currentIndex
      this.setData({
        curIndex: index
      });

      //3.发出自定义事件
      this.triggerEvent("tabTap", {
        index
      }, {})
    }
  }
})