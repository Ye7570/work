// pages/made-detail/made-detail.js
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
    list2: ['单面黑白', '双面黑白', '单面彩色', '双面彩色'],
    list1: ['不装订', '左侧订', '胶订'],
    currentIndex: 0,
    currentIndex1: 0,
    flag6:false,
flag5:true,
casArray: ['龙洞广工校内A区宿舍楼下', '六悦大学城广药一饭门口'],
casIndex: 0,
flag: false,
flag1: false,
flag2: false,
flag3: false,
list: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    target1: function (e) {
      console.log(e.currentTarget.dataset.index)
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      })
    },
    target2: function (e) {
      console.log(e.currentTarget.dataset.index)
      this.setData({
        currentIndex1: e.currentTarget.dataset.index
      })
    },
what:function(){
this.setData({
  flag5: false
})
},
    what1: function () {
      this.setData({
        flag5: true
      })
    },
    bindPickerChange: function (e) {
      this.setData({
        casIndex: e.detail.value
      })
    },
    next: function (e) {
      this.setData({
        flag: false
      })
    },
    wendian: function (e) {
      this.setData({
        flag1: false,
        flag3: false,
        flag2: false,
      })
    },
    songhuo: function (e) {
      this.setData({
        flag2: true,
        flag1: true
      })
    },
    address: function () {
      var that = this;
      if (wx.chooseAddress) {
        wx.chooseAddress({
          success: function (res) {
            console.log(res)
            that.setData({
              flag3: true,
              flag2: false,
              flag1: true,
              list: res
            })
          },
          fail: function (err) {
            console.log(JSON.stringify(err))
          }
        })
      } else {
        console.log('当前微信版本不支持chooseAddress');
      }
    }
  }
})
