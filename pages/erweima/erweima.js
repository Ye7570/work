// pages/erweima/erweima.js
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
      "color": "black",
      "selectedColor": "#f00",
      "backgroundColor": "#fff",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/home/home",
          "iconPath": "../images/home.png",
          "selectedIconPath": "../images/home_1.png",
          //"selectedColor": "#4EDF80",  
          "selectedColor": "#4EDF80",
          active: false
        
        },
        {
          // "pagePath": "/pages/erweima/erweima",
   
          "iconPath": "../images/scan.png",
          "selectedIconPath": "../images/scan_change.png",
          // "selectedColor": "#4EDF80",
          active: true
        },
        {
          "pagePath": "/pages/mine/mine",
     
          "iconPath": "../images/user.png",
          "selectedIconPath": "../images/user_1.png",
          "selectedColor": "#4EDF80",
          active: false
        }
      ],
      "position": "bottom"
    }  
  },

  /**
   * 组件的方法列表
   */
  methods: {
  onLoad:function(e){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  }
  }
})
