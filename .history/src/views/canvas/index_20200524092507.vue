<!-- 组件说明 -->
<template>
  <div class="canvas-main">
    <canvas id="myCanvas" width="600px" height="600px">
      您的浏览器不支持canvas。
    </canvas>
    <a class="btn play" @click="play()">开始</a>
    <a class="btn stop" @click="stop()">暂停</a>
  </div>
</template>

<script>
  //import x from ''
  export default {
    components: {

    },
    data () {
      return {

      };
    },
    computed: {

    },
    methods: {
      start(){
        console.log('ffdhfhd');
        var arr = [{x:0,y:0},{x:200,y:300}]  //行驶坐标点
        var speed = 1; //速度
        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext('2d'); //获得 CanvasRenderingContext2D 对象，该对象提供基本的绘图命令
        var img = new Image()
        img.src = require("@/assets/img/1.jpg")
        this.draw()
      },
      play(){},
      stop(){},
       //绘制路径
      draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);//清除画布内容
        if(arr[0].x<arr[1].x){
            arr[0].x+=speed;
        };
        if(arr[0].y<arr[1].y){
            arr[0].y+=speed;
        };
        //drawImage(img,x,y,w,h);
        ctx.drawImage(img,arr[0].x,arr[0].y,30,30);
        //行驶的轨迹
        ctx.strokeStyle='green';
        ctx.lineTo(arr[0].x,arr[0].y);  //画点
        ctx.stroke();  //执行绘制
    }

    },
mounted() {
this.start()
},
created () {
  
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>

<style>
.main {
    /* background-image: url(../img/back.jpg); */
    max-width:600px;
    background-size: 600px;
    position:relative;
}
.main .btn {
    position:absolute;
    top:10px;
    color: red;
    cursor:pointer;
}
.main .play{
    right:70px;
}
.main .stop{
    right:20px;
}
</style>