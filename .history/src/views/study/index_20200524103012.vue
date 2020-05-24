<!-- 组件说明 -->
<template>
  <div class="main-a">
       <div class="panel-heading">
            <h1>vue定制学习计划</h1>
            <div>
                <a>共有 <span class="badge" >fgtrt</span>个计划,</a>
                <a>已完成：<span class="badge" >tfgrtgtr</span></a>
                <a>未完成：<span class="badge" >grtg</span></a>
            </div>
        </div>
        <div>

        </div>


  </div>
</template>

<script>
  //import x from ''
  export default {
    components: {

    },
    data () {
      return {

      };
    },
    computed: {

    },
    methods: {

    },
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>

<style scoped>
.main-a{


</style>