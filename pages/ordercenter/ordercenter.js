// pages/ordercenter/ordercenter.js
var sliderWidth = 63; // 需要设置slider的宽度，用于计算中间位置
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

    flag1:false,
    tabs: ["排队中", "待收货", "已完成"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    allwidth:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function () {
      var that = this;
      wx.getSystemInfo({
        success: function (res) {
          that.setData({
            allwidth:res.windowWidth,
            sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
            sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
          });
        }
      });
    },
    tabClick: function (e) {
      console.log(e.currentTarget.id)
      this.setData({
        sliderOffset: this.data.allwidth / this.data.tabs.length * e.currentTarget.id,
        activeIndex: e.currentTarget.id
      });
    }
  }
})
