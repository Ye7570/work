// pages/money/money.js
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
    flag1:true,
    flag2:false,
    flag3:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
check:function(){
  this.setData({
    flag1:true,
    flag2:false
  })
},
    check1: function () {
      this.setData({
        flag2: true,
        flag1: false,
      })
    }
  }
})
