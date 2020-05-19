<template>
  <div class="wrapper">
    <div class="warpper-left">
     <div class="city-contaion-title">
           <p>已选择城市</p>
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
  margin: 10px;
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
</style>