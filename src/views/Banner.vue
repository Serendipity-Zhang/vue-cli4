<template>
  <div class="banner">
      <img v-for="(v,i) in img" :key="i" :src="v" v-show="n==i"/>
      <!-- <img src="@/assets/img/1.jpg"/>  -->
      <div class="banner-circle">
          <ul>
              <li  v-for="(v,i) in img" :key="i" :class="n==i?'selected':''"></li>  
          </ul> 
      </div>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
    return{
      n:0,
      timer:null, //定时器
      img:[
        require("@/assets/img/1.jpg"),
        require("@/assets/img/2.jpg")]
    }
  },
  methods:{
    autoPlay(){
      this.timer = setInterval(this.play,2000);
    },
    play(){
      this.n++;
      if(this.n>=this.img.length){
        this.n = 0;
      }
    }
  },
  mounted(){   //挂载完成
    this.autoPlay();
  },
  destroyed(){  //销毁
    clearInterval(this.timer)
  }
}
</script>
