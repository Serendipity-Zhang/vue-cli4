<template>
<div>
  <div class="add-people">
      <div class="add-people-content">
        <span>姓名</span>
        <input type="text" v-model="fromOne.name">

      </div>
       <div class="add-people-content">
        
      </div>
       <div class="add-people-content">
        
      </div>
       <div class="add-people-content">
        
      </div>


    </div>

  <table class="table"> 
    
    <thead>
      <tr >
        <th>
          <input type="checkbox" v-model="checkAll" @change="checkChange"/>
        </th>
        <th>用户姓名</th>
        <th>用户性别</th>
        <th>所在城市</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(v,i) in lists" :key="i">
          <th><input type="checkbox" v-model="v.check" @change="curCheckChange"></th>
          <td>{{v.name}}</td>
          <td>{{v.sex}}</td>
          <td>{{v.city}}</td>
          <td><button disabled="true">删除</button></td>
      </tr>
      
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
    return{
      fromOne:{name:''},
      checkAll:false,  //全选
      lists:[
          {name:'张三1',sex:'男',city:'北京1',check:true},
          {name:'张三2',sex:'女',city:'北京2',check:false},
          {name:'张三3',sex:'男',city:'北京3',check:false},
          {name:'张三4',sex:'男',city:'北京4',check:false},
          {name:'张三5',sex:'女',city:'北京5',check:false},
          {name:'张三6',sex:'男',city:'北京6',check:false},
          {name:'张三7',sex:'男',city:'北京7',check:true},
      ],
    }
  },
  methods:{
      checkChange(){  //全选的状态改变
          this.lists.forEach(item=>{
              item.check = this.checkAll
          })
      },
      curCheckChange(){  //当前
          //当前选中的状态
          // var num = this.lists.filter(item=>item.check).length;
          //console.log(num);
          //num==this.lists.length ? this.checkAll = true : this.checkAll = false;
          //every()  检测数组中的元素是否符合条件，都满足，返回true, 只要有一个没有满 足，返回false
          this.checkAll = this.lists.every(item=>item.check);

      }
  }
}
</script>

<style scoped>
.add-people{
  margin-bottom: 30px;
  text-align: center;
}
 span{
    margin-right: 15px;
  }
.add-people .add-content input{
    font-size: 20px;
    vertical-align:middle;
    border: 1px solid black;
    border-radius: 5px;
    outline: none;
    padding: 4px 8px;
}
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