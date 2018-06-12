// pages/tijiao/tijiao.js
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
    list: ['单面黑白', '双面黑白', '单面彩色', '双面彩色'],
    list1: ['不装订', '左侧订','胶订'],
    currentIndex:0,
    currentIndex1: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
   target1:function(e){
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
   }
  }
})
