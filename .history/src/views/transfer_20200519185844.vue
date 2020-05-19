<template>
  <div class="wrapper">
    <div class="warpper-left">
     <div class="city-contaion-title">
        <p>已选择城市</p>
      </div>
       <div class="city-contaion-con city-contaion-left">
                 <ul>
                      <li >fgbgf</li>
                               
                            </ul>
                        </div>
    </div>
     <div class="warpper-right">
     <div class="city-contaion-title">
        <p>城市12 / 当前选中\thyyt</p>
    </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  name:'',
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper{
  display: flex;
  justify-content: space-between;
  margin: 20px;
}
.warpper-left{
    width: 50%;
    height: 500px;
    float: left;
    text-align: center;

}
.city-contaion-title{
    width: 450px;
    height: 50px;
    margin: auto;
    margin-top: 25px;
    border: 1px solid #CED8FC;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: #AFDBFF;
    text-align: left;
}
.city-contaion-con{
    width: 450px;
    height: 400px;
    margin: auto;
    border: 1px solid #CED8FC;
    
}
.city-contaion-con ul{
width: 100%;
height: 100%;
padding: 10px;
}
.city-contaion-con ul li{
    /* width: 50px; */
    height: 40px;
    padding: 0 20px 0 20px;
    line-height: 40px;
    border: 1px solid #4BE5B4;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    background: #CBE8FF;
    position: relative;

}
.city-contaion-con ul li:hover{
  cursor: pointer;
  border: 1px solid #2417F8;

}
.icon-close-city{
    position: absolute;
    font-size: 5px !important;
    left:53px;
    margin-top: -10px;
}
.city-contaion-left li.forbidden {
    color:#640FF7;
    background: #76F0F0;
    border: 1px solid #2417F8;
}

</style>