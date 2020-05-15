<template>
<div>
  {{title}}
  <table class="table"> 
    <thead>
      <tr >
        <th>用户姓名</th>
        <th>用户性别</th>
        <th>所在城市</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(v,i) in lists" :key="i">
          <td>{{v.name}}</td>
          <td>{{v.sex}}</td>
          <td>{{v.city}}</td>
          <td>
            <!-- 子传父  接收消息@e-child="acceptSon-->
            <Btn :obj = "obj"  @e-child="acceptSon"/>
            <!-- 子操作父的方法  :event="add" 传入父的方法-->
            <Btn :obj = "obj2" :event="add"  @e-child="acceptSon"/>
          </td>
      </tr>
    </tbody>
  </table>
</div>
  
</template>

<script>
import Btn from './Btn.vue'

export default {
  name:'',
  data(){
    return{
      title:'标题',
      obj:{title:'修改',color:'green'},
      obj2:{title:'删除',color:'red'},
      lists:[
          {name:'张三1',sex:'男',city:'北京1',check:true},
          {name:'张三2',sex:'女',city:'北京2',check:false},
          {name:'张三3',sex:'男',city:'北京3',check:false},
          {name:'张三4',sex:'男',city:'北京4',check:false},
          {name:'张三5',sex:'女',city:'北京5',check:false},
          {name:'张三6',sex:'男',city:'北京6',check:false},
          {name:'张三7',sex:'男',city:'北京7',check:true},
      ]
    }
  },
  methods:{
    add(){
      this.title = 10;
    },
     acceptSon(d){  //接收子消息
      //this.title = d;
      d();
     }
  },
  components:{
    Btn
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