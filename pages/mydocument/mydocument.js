// pages/mydocument/mydocument.js
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
list:[
  {},
  { },
  {},
  {}
],
currentIndex:-1
  },

  /**
   * 组件的方法列表
   */
  methods: {
made:function(e){
console.log(e.currentTarget.dataset.index)
this.setData({
  currentIndex: e.currentTarget.dataset.index
})
},
made1:function(e){
  console.log('222')
  this.setData({
    currentIndex:-1
  })
}
  }
})
