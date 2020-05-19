<template>
  <div id="app">
    <!-- 左侧内容 -->
    <!-- <Nav /> -->
    <!-- 右侧内容 -->
    <!-- <div> -->
      <!-- 展示的出口 -->
      <!-- $route.meta.keepAlive 通过路由meta 为true的值 进行缓存 -->
      <!-- <keep-alive v-if="$route.meta.keepAlive">   -->
        <!-- 匹配路由缓存 -->
         <router-view />
      <!-- </keep-alive> -->
     
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
