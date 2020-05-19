<template>
  <div class="wrapper">
    <div class="warpper-left">
     <div class="city-contaion-title">
           <p>已选择城市</p>
      </div>
    </div>
     <div class="warpper-right">
     <div class="city-contaion-title">
        <p>城市({{leftCitys.length}}) / 当前选中({{rightCitys.length}})</p>
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
}
</style>