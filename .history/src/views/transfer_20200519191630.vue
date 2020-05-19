<template>
  <div class="wrapper">
    <div class="warpper-left">
      <div class="city-contaion-title">
        <p>已选择城市</p>
      </div>
      <div class="city-contaion-con city-contaion-left">
        <ul>
           <li v-for="(city,i) in leftCitys" 
            :key="i" @click="AddCity(city)">{{city.name}}</li>
        </ul>
      </div>
    </div>
    <div class="warpper-right">
      <div class="city-contaion-title">
        <p>gh</p>
      </div>
                   <div class="city-contaion-con">
                            <ul>
                                
                                <li v-for="(city,i) in rightCitys" :key="i" >
                                    <i class="iconfont icon-left icon-cha icon-close-city"></i>
                                 {{city.name}}
                                </li>
                               
                            </ul>

                        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
        leftCitys:[
                {name:'北京',id:'1',cityFlag:false},
                {name:'天津',id:'2',cityFlag:false},
                {name:'上海',id:'3',cityFlag:false},
                {name:'深圳',id:'4',cityFlag:false},
                {name:'广州',id:'5',cityFlag:false},
                {name:'南京',id:'6',cityFlag:false},
                {name:'沈阳',id:'7',cityFlag:false},
                {name:'大连',id:'8',cityFlag:false},
                {name:'南昌',id:'9',cityFlag:false},
                {name:'西安',id:'10',cityFlag:false},
                {name:'重庆',id:'11',cityFlag:false},
                {name:'长沙',id:'12',cityFlag:false},

            ],
             rightCitys:[],//城市添加
    };
  },
  watch: {},
  computed: {},
  methods: {
    AddCity(data){
      console.log(data);
     // data.cityFlag = true
     for(var i = 0;i<rightCitys.length;i++){
       if (data.id == rightCitys[i].id) return
     }
     this.rightCitys.push(data)
      
    }
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}
.warpper-left {
  width: 50%;
  height: 500px;
  float: left;
  text-align: center;
}
.city-contaion-title {
  width: 450px;
  height: 50px;
  margin: auto;
  margin-top: 25px;
  border: 1px solid #ced8fc;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: #afdbff;
  text-align: left;
}
.city-contaion-con {
  width: 450px;
  height: 400px;
  margin: auto;
  border: 1px solid #ced8fc;
}
.city-contaion-con ul {
  width: 100%;
  height: 100%;
  padding: 10px;
}
.city-contaion-con ul li {
  /* width: 50px; */
  height: 40px;
  padding: 0 20px 0 20px;
  line-height: 40px;
  border: 1px solid #4be5b4;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  background: #cbe8ff;
  position: relative;
}
.city-contaion-con ul li:hover {
  cursor: pointer;
  border: 1px solid #2417f8;
}
.icon-close-city {
  position: absolute;
  font-size: 5px !important;
  left: 53px;
  margin-top: -10px;
}
.city-contaion-left li.forbidden {
  color: #640ff7;
  background: #76f0f0;
  border: 1px solid #2417f8;
}
</style>
