<template>
  <button :style="{color:obj.color}" >{{obj.title}}</button>
</template>

<script>
export default {
  name:'',
  data(){
    return{
      msg:'我是按钮组件'
    }
  },
  //父到子传递参数
  //props:['title','color'],  //字符串数组写法
  props:{    //对象写法
    //title:String,
    //color:String,
    // title:{
    //   type:String,
    //   default:'标题'
    // }
    obj:{
      title:String,
      color:String
    },
    event:Function
  },
  methods:{
      send(){
        return 100
      }
  }
}
</script>

<style scoped>

</style>