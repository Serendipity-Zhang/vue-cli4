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
             <div class="input-group">
                 <el-input
      class="item-two"
     
      type="password"
      palceholser="请输入输入密码"
      ></el-input>
            
            </div>

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
  text-align: center;
}
.panel-heading{
   color:#31708f;

}
li{
    list-style-type: none;
    line-height: 40px;
    position: relative;
    border: 1px solid transparent;
    padding: 0 20px;
}
li .status-span{
    display: block;
    width: 10px;
    height: 10px;
    background: #ccc;
    margin: 14px 10px 0 0 ;
    float: left;
}
li .status-span.status-end{
    background: #09f;
}
li .close{
    position: absolute;
    color: #f00;
    font-size: 20px;
    line-height: 40px;
    height: 40px;
    right: 20px;
    cursor: pointer;
    display: none;
    top: 0;
}
li:hover{
    background:rgba(217,237,247,.5);
}
li:hover .close{
    display: block;
}

li .text-keyword{
    height: 40px;
    padding-left: 10px;
    box-sizing: border-box;
    margin-left: 10px;
    width: 80%;
    display: none;
}
.text-keyword{
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding-left: 10px;
    outline: none;
}
li .badge{
    float: right;
}
.panel-heading {
    text-align:center;
}
.panel-heading h1{
    color:#31708f;
}
.input-group {
    margin-bottom: 15px;
}
.line-through {
    text-decoration:line-through
}
.btn-group .btn-default.selected {
    background: #31708f;
    color:#fff;
}
</style>