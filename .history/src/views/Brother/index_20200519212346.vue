<template>
<div>
  <h1>父组件</h1>
</div>
  
</template>

<script>
import testA from './testA.vue'

export default {
  name:'',
  data(){
    return{
      title:'标题',
      obj:{title:"按钮",color:"red"}
 
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
    }
  },
  components:{
    testA
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