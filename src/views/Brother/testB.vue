<!-- 组件说明 -->
<template>
  <div class=''>
     组件B
     <input type="text" v-model="titel" @input="send()">
  </div>
</template>

<script>
  //import x from ''
  export default {
    components: {

    },
    data () {
      return {
        titel:'组件A'

      };
    },
    computed: {

    },
    methods: {
      send(){
        this.$emit('e-child',this.titel)
      }

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

<style>
</style>