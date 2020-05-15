<template>
  <button :style="{color:obj.color}">{{obj.title}}</button>
</template>

<script>
export default {
  name:'',
  data(){
    return{

    }
  },
  //父到子传递参数
  //props:['title','color','obj','event'],  //字符串数组写法
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
    }
  },
  methods:{
      
  }
}
</script>

<style scoped>

</style>