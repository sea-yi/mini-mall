// miniprogram/pages/home/home.js
import {
  getMultiData
} from '../../service/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.请求轮播图以及推荐数据
    getMultiData().then(res => {
      console.log(res);
      //2.取出轮播图和推荐的数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
       //3.将banners和recommends放到data中
       this.setData({
         banners,
         recommends
       })
    })
  },
})