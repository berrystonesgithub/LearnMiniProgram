// pages/home/home.js
Page({

  data: {
    title: ["衣服", "帽子", "鞋子", "裤子"]
  },

  handleBtnClick() {
    console.log('点击点击')
  },
  handleTouchStart() {
    console.log('handleTouchStart')
  },
  handleTouchMove() {
    console.log('handleTouchMove')
  },
  handleTouchEnd() {
    console.log('handleTouchEnd')
  },
  handleTap() {
    console.log('handleTap')
  },
  handleLongPress() {
    console.log('handleLongPress')
  },
  handleEventTap(event) {
    console.log('-----', event)
  },
  handleEventEnd(event) {
    console.log('++++++', event)
  },
  handleInner(event) {
    console.log(event)
  },
  handleOuter(event) {
    console.log(event)
  },
  handleItemTap(event) {
    console.log(event);
    //title - index
    const dataset = event.target.dataset;
    const index = dataset.index;
    const title = dataset.title;
    console.log(index, title)
  },

  //====事件冒泡和事件捕获
  handleCaptureView1() {
    console.log("handleCaptureView1");
  },
  handleCaptureView2() {
    console.log("handleCaptureView2");
  },
  handleCaptureView3() {
    console.log("handleCaptureView3");
  },
  handleBindView1() {
    console.log("handleBindView1");
  },
  handleBindView2() {
    console.log("handleBindView2");
  },
  handleBindView3() {
    console.log("handleBindView3");
  }
})