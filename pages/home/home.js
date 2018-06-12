// pages/home/home.js
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
      
         
          "iconPath": "../images/home.png",
          "selectedIconPath": "../images/home_1.png",
          //"selectedColor": "#4EDF80",  
          active: true
        },
        {
         
        
          "iconPath": "../images/scan.png",
          "selectedIconPath": "../images/scan_change.png",
          "selectedColor": "#4EDF80",
          active: false
        },
        {
     
   
          "iconPath": "../images/user.png",
          "selectedIconPath": "../images/user_1.png",
          "selectedColor": "#4EDF80",
          active: false
        }
      ],
      "position": "bottom"
    },
    flag1:false,
    flag2:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad:function(e){
      this.setData({
        flag1: false,
        flag2: false
      })
    },
    document1:function(e){
      this.setData({
        flag1:true,
        flag2:false
      })
      wx.navigateTo({
        url: '../document/document',
      })
    },
    madedetail: function (e) {
      this.setData({
        flag1:false,
        flag2: true
      })
      wx.navigateTo({
        url: '../made-detail/made-detail',
      })
    },
    saomiao0:function(e){
          wx.redirectTo({
            url: '../home/home',
          })
    },
saomiao1:function(e){
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
  }
})
