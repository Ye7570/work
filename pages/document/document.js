// pages/document/document.js
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
    casArray: ['龙洞广工校内A区宿舍楼下', '六悦大学城广药一饭门口'],
    casIndex: 0,
    flag:true,
    flag1:false,
    flag2:false,
    flag3:false,
    list:[],
    num:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    jiahao:function(e){
      var num=this.data.num+1
      this.setData({
        num:num
      })
    },
    jianhao:function(e){
      var num=this.data.num-1
      if(num<=1){
        this.setData({
          num:1
        })
        return
      }else{
        this.setData({
          num: num
        })
      }
    },
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
    bindPickerChange:function(e){
      this.setData({
        casIndex: e.detail.value
      })
    },
    next:function(e){
      this.setData({
        flag:false
      })
    },
    wendian:function(e){
      this.setData({
        flag1:false,
        flag3: false,
        flag2: false,
      })
    },
    songhuo: function (e) {
      this.setData({
        flag2: true,
        flag1:true
      })
    },
    address:function(){
      var that=this;
      if (wx.chooseAddress) {
        wx.chooseAddress({
          success: function (res) {
            console.log(res)
            that.setData({
              flag3:true,
              flag2:false,
              flag1: true,
              list:res
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
