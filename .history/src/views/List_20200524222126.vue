<template>
  <div>
    <div class="add-people">
      <div class="add-people-content">
        <span>姓名</span>
        <input type="text" v-model="fromOne.name" />
      </div>
      <div
        class="add-people-content"
        style="margin-left: 92px;margin-top: 30px;"
      >
        <span>性别</span>
        <div class="oneSelect">
          <label for="sex1">
            <input type="radio" name="sex" v-model="fromOne.sex" value="0" />男
          </label>
          <label for="sex2">
            <input type="radio" name="sex" v-model="fromOne.sex" value="1" />女
          </label>
        </div>
      </div>
      <div class="add-people-content">
        <span>年龄</span>
        <input type="number" name="" id="" v-model.number="fromOne.age" />
      </div>
      <div class="add-people-content">
        <span>地区</span>
       
        <select name="" id="" v-model="provinceSelect">
          <option :value="v" v-for="(v,i) in provice" :key="i">{{v.AddName}}</option>
        </select>
         <select name="" id="" v-model="citySelect">
          <option value="" v-for="(v,i) in city" :key="i">{{v.AddName}}</option>
        </select>
         <select name="" id="" v-model="areaSelect">
          <option value="" v-for="(v,i) in area" :key="i">{{v.AddName}}</option>
        </select>
      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" v-model="checkAll" @change="checkChange" />
          </th>
          <th>用户姓名</th>
          <th>用户性别</th>
          <th>所在城市</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(v, i) in lists" :key="i">
          <th>
            <input type="checkbox" v-model="v.check" @change="curCheckChange" />
          </th>
          <td>{{ v.name }}</td>
          <td>{{ v.sex }}</td>
          <td>{{ v.city }}</td>
          <td><button disabled="true">删除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import site_address from './areaIndex'
export default {
  name: "",
  data() {
    return {
      site_address,
      fromOne: { name: "", sex: "", age: "18" },
      provinceSelect:'',
      citySelect:'',
      areaSelect:'',
      provice:[],
      city:[],
      area:[],
      checkAll: false, //全选
      lists: [
        { name: "张三1", sex: "男", city: "北京1", check: true },
        { name: "张三2", sex: "女", city: "北京2", check: false },
        { name: "张三3", sex: "男", city: "北京3", check: false },
        { name: "张三4", sex: "男", city: "北京4", check: false },
        { name: "张三5", sex: "女", city: "北京5", check: false },
        { name: "张三6", sex: "男", city: "北京6", check: false },
        { name: "张三7", sex: "男", city: "北京7", check: true },
      ],
       listss:[
                {
                    id:0,
                    name:'张三',
                    sex:0,
                    area:'北京市-北京市-柔坏区',
                    age:16,
                    province:{"ID": 2,"TopID": 0,"AddName": "北京市"},
                    city:{"ID": 48,"TopID": 2,"AddName": "北京市"},
                    nowarea:{"ID": 495,"TopID": 48,"AddName": "怀柔区"},
                },
                {
                    id:1,
                    name:'李四',
                    sex:1,
                    area:'北京市-北京市-柔坏区',
                    age:28,
                    province:{"ID": 2,"TopID": 0,"AddName": "北京市"},
                    city:{"ID": 48,"TopID": 2,"AddName": "北京市"},
                    nowarea:{"ID": 495,"TopID": 48,"AddName": "怀柔区"},
                },
                {
                    id:2,
                    name:'王五',
                    sex:1,
                    area:'北京市-北京市-柔坏区',
                    age:30,
                    province:{"ID": 2,"TopID": 0,"AddName": "北京市"},
                    city:{"ID": 48,"TopID": 2,"AddName": "北京市"},
                    nowarea:{"ID": 495,"TopID": 48,"AddName": "怀柔区"},
                },
            ],
    };
  },
  methods: {
    checkChange() {
      //全选的状态改变
      this.lists.forEach((item) => {
        item.check = this.checkAll;
      });
    },
    curCheckChange() {
      //当前
      //当前选中的状态
      // var num = this.lists.filter(item=>item.check).length;
      //console.log(num);
      //num==this.lists.length ? this.checkAll = true : this.checkAll = false;
      //every()  检测数组中的元素是否符合条件，都满足，返回true, 只要有一个没有满 足，返回false
      this.checkAll = this.lists.every((item) => item.check);
    },
    getArea(){
      this.provice = site_address.filter(item => item.TopID == 0)
      console.log(this.provice);
      this.city = site_address.filter(item => item.TopID == 1)
       this.area = site_address.filter(item=>item.TopID==32);
      
    }
    
   
  },
   mounted () {
     console.log(this.site_address);
       console.log(site_address);
     
       this.getArea();
    }
};
</script>

<style scoped>
.add-people {
  margin-bottom: 30px;
  text-align: center;
}
span {
  margin-right: 15px;
}
.add-people .add-content input {
  font-size: 20px;
  vertical-align: middle;
  border: 1px solid black;
  border-radius: 5px;
  outline: none;
  padding: 4px 8px;
}
.oneSelect {
  width: 16rem;
  display: inline-block;
  text-align: left;
}
.add-people-content {
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
}
.table {
  width: 70%;
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
}
.table td,
.table th {
  border: 1px solid #ddd;
  padding: 10px;
}
.table thead tr {
  background: #1f76b3;
  color: #fff;
}
</style>
