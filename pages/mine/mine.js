// pages/mine/mine.js
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
    tabBar: {
      // "color": "black",
      // "selectedColor": "#fff",
      "backgroundColor": "#fff",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/home/home",

          "iconPath": "../images/home.png",
          "selectedIconPath": "../images/home_1.png",
          "selectedColor": "#4EDF80",  
          active: false
        },
        {
          // "pagePath": "/pages/erweima/erweima",

          "iconPath": "../images/scan.png",
          "selectedIconPath": "../images/scan_change.png",
          "selectedColor": "#4EDF80",
          active: false
        },
        {
          "pagePath": "/pages/mine/mine",

          "iconPath": "../images/user.png",
          "selectedIconPath": "../images/user_1.png",
          // "selectedColor": "#4EDF80",
          active: true
        }
      ],
      "position": "bottom"
    }  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    saomiao0: function (e) {
      wx.redirectTo({
        url: '../home/home',
      })
    },
    saomiao1: function (e) {
      wx.scanCode({
        onlyFromCamera: true,
        success: (res) => {
          console.log(res)
        }
      })
    },
    saomiao2: function (e) {
      wx.redirectTo({
        url: '../mine/mine',
      })
    },
    money:function(e){
      wx.navigateTo({
        url: '../money/money',
      })
    },
    ordercenter:function(e){
     
      wx.navigateTo({
        url: '../ordercenter/ordercenter',
      })
    },
    file:function(e){
      wx.navigateTo({
        url: '../file/file',
      })
    },
    mydocument:function(e){
      wx.navigateTo({
        url: '../mydocument/mydocument',
      })
    },
    contact:function(e){
      wx.navigateTo({
        url: '../contact/contact',
      })
    }
  }
})
