<template>
  <div id="app">
    <!-- 左侧内容 -->
    <!-- <Nav /> -->
    <!-- 右侧内容 -->
    <!-- <div> -->
      <!-- 展示的出口 -->
      <router-view />
    <!-- </div> -->
  </div>
</template>

<script>
import Nav from './views/Nav.vue'; //导入

export default {
  name: 'App',
  data(){
    return {
 
    }
  },
  method:{
    
  },
  components:{  //组件
    Nav
  }

}
</script>

<style>
 @import './assets/css/index.css'; 
 #app {
   height:100%;
 }
 
</style>
