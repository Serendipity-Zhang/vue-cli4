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
        arr:[{x:0,y:0},{x:200,y:300}],
        sppd:1,
        timer:'',
        flay:false,


      };
    },
    computed: {

    },
    methods: {
      start(){},
     play(){
        if(flag) return;
        timer = setInterval(draw,50);
        flag = true;
    },
    stop(){
        clearInterval(timer);
        flag = false;
    },
    }
mounted() {
  var canvas = document.getElementById('myCanvas');
   var ctx = canvas.getContext('2d');
  var img = new Image();
  img.src='img/person.png'; //加载图片的地址


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
.canvas-main {
    background-image: url('../../assets/img/back.jpg');
    /* max-width:600px; */
    background-size: 600px;
    position:relative;
      /* height: 100vh; */
  background-size: cover;
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