// pages/shiyan/shiyan.js
var app = getApp()
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    canvasIdErrorCallback: function (e) {
      console.error(e.detail.errMsg)
    },
    onLoad: function () {
      var ctx = wx.createCanvasContext('firstCanvas');
   
      // ctx.stroke();
      // ctx.draw();
      // var ctx1 = wx.createCanvasContext('firstCanvas');
      ctx.beginPath();
      ctx.moveTo(50, 75)
      var num=0;
     var timer= setInterval(function(){
            num=num+10;
            console.log(num)
            if (num >= 100) {
              clearInterval(timer)
            } else {
              ctx.beginPath();
              ctx.arc(100, 75, 50, 0, 2 * Math.PI);
              //
              ctx.setStrokeStyle("#ff00ff");
              ctx.setFillStyle("#ff00ff");
              ctx.fill();
              ctx.globalCompositeOperation = "source-in";
              // ctx.stroke();
              // ctx.draw();
              // var ctx1 = wx.createCanvasContext('firstCanvas');
              ctx.beginPath();
              ctx.moveTo(50, 75)
              ctx.rect(50, 30, 100, num);
              ctx.setFillStyle("black");
              ctx.fill();
            
              ctx.stroke();
              ctx.draw();
            }
      },1000)
  
     ctx.stroke();
     ctx.draw();
      // ctx.setFillStyle("black");
    
    },
    //手指触摸动作开始 记录起点X坐标
    
  }
})
