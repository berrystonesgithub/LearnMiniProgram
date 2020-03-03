// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../service/home.js'
import request from '../../service/network.js'

const TOP_DISTANCE = 100;
const typeList = ['pop', 'new', 'sell'];

Page({
  data: {
    showBackUp: false,
    isTabFixed: false,
    tabTop: 0,
    banners: [],
    recommends: [],
    tabTitles: ["流行", "新款", "精选"],
    goods: {
      'new': {
        page: 0,
        list: []
      },
      'pop': {
        page: 0,
        list: []
      },
      'sell': {
        page: 0,
        list: []
      },
    },
    curType: 'pop'
  },
  onLoad: function(options) {
    //1.请求轮播图和推荐数据
    this._getMultiData();

    //2.请求商品数据
    this._getGoodsData('pop');
    this._getGoodsData('new');
    this._getGoodsData('sell');
  },

  //-----------网络请求函数------------------------
  _getMultiData() {
    //1.请求轮播图以及推荐数据
    getMultiData().then(res => {
      const banners = res.data.data.banners.list;
      const recommends = res.data.data.recommends.list;
      //将数据放进data中
      this.setData({
        banners,
        recommends
      })
    });
  },
  _getGoodsData(type) {
    //1.获取页面
    const page = this.data.goods[type].page + 1;

    //2. 发送网络请求    
    getGoodsData(type, page).then(res => {
      //2.1.取出数据
      const list = res.data.data.list;
      //2.2.将数据设置到对应type类型的list中
      const oldList = this.data.goods[type].list;
      oldList.push(...list);
      //2.3.将数据设置到对应type类型的list中
      const typeKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    }).catch(err => {
      console.log(err)
    })
  },
  //-----------事件监听函数------------------------
  handleTabTap(event) {
    //1.取出index
    const index = event.detail.index;

    //2.设置curType
    this.setData({
      curType: typeList[index]
    })
  },
  onReachBottom() {
    // 上拉加载更多
    this._getGoodsData(this.data.curType);
  },
  onPageScroll(options) {
    //1.获取上滚数值
    const scrollTop = options.scrollTop;

    //2.改变显示
    const flag = scrollTop >= TOP_DISTANCE;
    if (!(flag && this.data.showBackTop)) {
      this.setData({
        showBackTop: flag
      });
    }

    //3.修改isTabFixed
    const flag1 = scrollTop >= this.data.tabTop;
    if(!(flag1 && this.data.isTabFixed)){
      this.setData({
        isTabFixed: flag1
      })
    }

  },
  handleImgLoad() {
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.tabTop = rect.top;
    }).exec();
  }
})