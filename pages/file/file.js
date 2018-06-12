// pages/file/file.js
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
    isTouchMove: 0,
    isTouchMove2: false,
    items:[],
    startX: 0, //开始坐标
    startY: 0,
    lastX:0,
    lastY:0,
    list:[
      { "name": "物理学院光电傅里叶光学15试卷", "num": '共35页' ,"flag":false},
      { "name": "物理学院光电信息光学12试卷", "num": '共20页', "flag": false },
      { "name": "物理学院光设方向毕业论文", "num": '共120页', "flag": false }

    ],
    currentIndex:-1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function () {
      
     
    },
    //手指触摸动作开始 记录起点X坐标
    touchstart: function (e) {
      //开始触摸时 重置所有删除
      // this.data.items.forEach(function (v, i) {
      //   if (v.isTouchMove)//只操作为true的
      //     v.isTouchMove = false;
      // })
      // this.setData({
      //   isTouchMove: true
      // })

      this.data.lastX = e.touches[0].pageX
      this.data.lastY = e.touches[0].pageY
   
      // this.setData({
      //   startX: e.changedTouches[0].clientX,
      //   startY: e.changedTouches[0].clientY,
      //   items: this.data.items
      // })
    },
    //滑动事件处理
    touchmove: function (e) {
      // 
      console.log(e.currentTarget.dataset.index)
      var item = e.currentTarget.dataset.index;
        var that = this
          let currentX = e.touches[0].pageX
        let currentY = e.touches[0].pageY
        let tx = currentX - this.data.lastX
        let ty = currentY - this.data.lastY
        if (Math.abs(tx) > Math.abs(ty)) {
          if (tx < -10 ) {
          //   var arr = this.data.list;
          //   for (var i = 0, len = arr.length; i < len; i++) {
          // //遍历输出
          //     if (item==i){
          //       arr[item].flag = true
                             
          //     }
          //     return arr;
          //     console.log(arr)
          //   }
            var list1 = "list[" + e.currentTarget.dataset.index+"].flag"
            // console.log(list)
            this.setData({
              currentIndex: e.currentTarget.dataset.index,
              [list1]:true
              // list:list
            })
            console.log('111')
            this.setData({
              isTouchMove: true,
              // isTouchMove1: false,
              
            })
            
          }
          else if (tx > 10 && this.data.isTouchMove == true && this.data.currentIndex == e.currentTarget.dataset.index) {
            console.log('222')
            if (this.data.list[e.currentTarget.dataset.index].flag ==true){
              var list1 = "list[" + e.currentTarget.dataset.index + "].flag"
              this.setData({
                currentIndex: -1,
                isTouchMove: false,
                [list1]: false
              })
            }
          
            // this.data.currentGesture = 2
          }

        }
    },
    /**
     * 计算滑动角度
     * @param {Object} start 起点坐标
     * @param {Object} end 终点坐标
     */
    angle: function (start, end) {
      var _X = end.X - start.X,
        _Y = end.Y - start.Y
      //返回角度 /Math.atan()返回数字的反正切值
      return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
    },
  }
})
