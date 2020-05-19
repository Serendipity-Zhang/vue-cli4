<template>
<div>
  <el-button type="primary"
  @click="flag = 'testA'"
  >主要按钮</el-button>
  <el-button type="success" 
  @click="flag = 'testB'"
  >成功按钮</el-button>
<keep-alive>
   <component :is="flag"></component>
</keep-alive>
<!-- include 值有匹配成功的才会被缓存  多个用逗号分隔
exclude  任何组件不会被缓存 -->
</div>  
</template>

<script>
import testA from './testA.vue'
import testB from './testB.vue'

export default {
  name:'',
  data(){
    return{
     
      flag:'testA'
 
    }
  },
  methods:{
    change(){
     // console.log(this.$refs.btn);
     // this.title= 12432432;
      this.$refs.input.focus();
      this.$refs.h1.style.color='red';
      //this.title = this.$refs.btn.msg;//直接获取子组件中的属性
      this.title = this.$refs.btn.send(); //直接操作子组件中的方法
    },
    acceptSon(res){
     this.title = res
    }
  },
  components:{
    testA,
    testB
  }
}
</script>

<style scoped>
ul {
    list-style-type:none;
}
.table{
    width: 70%;
    border-collapse: collapse;
    margin: 0 auto;
    text-align: center;
}
.table td,
.table th{
    border: 1px solid #ddd;
    padding: 10px;
}
.table thead tr {
	background:#1f76b3;
	color:#fff;
} 
</style>