<!-- 登录页面 -->
<template>
<div class="login-container">
  <div class="title">Vue2.0学习</div>
  <div class="title-tips">
    欢迎来到{{title}}
  </div>
  <div class="login from-box">
    <form>
      <div class="from">
      <el-input
      class="item"
      v-model="userName"
      type="text-one"
      palceholser="请输入用户名"
      ></el-input>
      <el-input
      class="item-two"
      v-model="password"
      type="password"
      palceholser="请输入输入密码"
      ></el-input>
      <el-button 
      type="primary"
      class="pri-button"
      @click="handeLogin"
      >主要按钮</el-button>
      </div>
    </form>

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
        title:'hello!',
        userName:''
      };
    },
    computed: {

    },
    methods: {
      handeLogin(){
        this.$router.push({path:'/home'})
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

<style lang="scss" scoped>
.login-container{
  height: 100vh;
  background: url("../assets/login_images/background.jpg") center center fixed no-repeat;
  background-size: cover;
   .title {
     padding: 33px 111px 33px 133px;
    height: 50px;
    font-size: 54px;
    font-weight: 500;
    color: rgba(14, 18, 26, 1);
  }
  
  .title-tips {
    padding: 33px 111px 33px 133px;
    height: 24px;
    margin-top: 29px;
    font-size: 26px;
    font-weight: 400;
    color: rgba(14, 18, 26, 1);
  }
}
.from-box{
  width: 554px;
  padding: 33px 111px 33px 133px;
  .item-one .item-two{
    font-size: 24px;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      text-align: center;
  }
  .item-two{
    margin-top: 20px;
  }
  .pri-button{
    margin-top: 20px;
  }
}
</style>