<template>
  <div class="tree">
      <ul>
        <li class="p_item" v-for="(v,i) in items" :key="i">
          <router-link :to="v.url" 
              class="p_title"
              @click="n=i">
            <i class="iconfont" :class="v.icon"></i>{{v.name}}
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name:'',
  data(){
    return{
      n:1,
      items:[
          {
              name:'首页',
              icon:'icon-shenghuo',
              url:'/home'
          },
          {
              name:'列表页',
              icon:'icon-biaoqingleiben',
              url:'/list'
          },
          {
              name:'父组件传子组件',
              icon:'icon-biaoqingleiben',
              url:'/toSon'
          },
          {
              name:'子组件传父组件',
              icon:'icon-biaoqingleiben',
              url:'/toFather'
          },
          {
              name:'父组件操作子-ref',
              icon:'icon-biaoqingleiben',
              url:'/actionSon'
          },
          {
              name:'兄弟组件',
              icon:'icon-biaoqingleiben',
              url:'/brother'
          },
           {
              name:'动态组件',
              icon:'icon-biaoqingleiben',
              url:'comp'
          },
          {
              name:'穿梭框',
              icon:'icon-biaoqingleiben',
              url:'/transfer'
          },
          {
              name:'时间轴',
              icon:'icon-biaoqingleiben',
              url:'/timeLine'
          },
          {
              name:'点击添加',
              icon:'icon-biaoqingleiben',
              url:'/AddFriend'
          }
      ]
    }
  }
}
</script>

<style>

</style>
