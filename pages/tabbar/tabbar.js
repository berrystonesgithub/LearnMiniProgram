// pages/tabbar/tabbar.js
Page({
  data: {
    titles: [
      "电影",
      "音乐",
      "电视剧"
    ],
    titles2: ['衣服', '裤子', '鞋子'],
    isShow:true
  },
  handleTabTap(event) {
    console.log(event);
  },
  handleIncrement(){
    //最终目的，修改my-select的数据
    //1.获取数组对象
    const my_select = this.selectComponent('#select-id');
 
    //2.通过setData改变组件的数据(不规范)
    my_select.setData({
      counter: ++ my_select.data.counter
    });


    console.log(my_select);
    //3.通过方法对数据进行修改
    my_select.incrementCounter(20);
  
  },
  handleChangeShow(){
    this.setData(
      {
        isShow: !this.data.isShow
      }
    )
  }
})