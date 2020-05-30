<template>
<div>
  <h1>父组件</h1>
   <testA :title="title"/>
   <!-- 第一种 testB发射到父，在父中改变标题的值 -->
   <testB @e-child ="acceptSon"/>

   <!-- 第二种 通过ref进行传参-->
   <!-- <testA :title="$refs.testB.title"/>
   <testB ref="testB"/>  -->
  <div class="container">
        <div class="box">
            <div class="img">
                <img src="./icos/录制.png"/>
            </div>
            <p>录音机</p>
        </div>
        <div class="box">
            <div class="img">
                <img src="./icos/微信.png"/>
            </div>
            <p>微信</p>
        </div>
        <div class="box">
            <div class="img">
                <img ../>../../日历.png"/>
            </div>
            <p>日历</p>
        </div>
        <div class="box">
            <div class="img">
                <img src=".../../../时钟.png"/>
            </div>
            <p>时钟</p>
        </div>
        <div class="box">
            <div class="img">
                <img src=".../../../浏览器.png"/>
            </div>
            <p>浏览器</p>
        </div>
        <div class="box">
            <div class="img">
                <img src="./icos/电话 (1).png"/>
            </div>
            <p>电话</p>
        </div>
        <div class="box">
            <div class="img">
                <img src="./icos/相册.png"/>
            </div>
            <p>相册</p>
        </div>
        <div class="box">
            <div class="img">
                <img src="../../assets/login_images/相机.png"/>
            </div>
            <p>相机</p>
        </div>
        <div class="box">
            <div class="img">
                <img src="../../assets/login_images/短信.png"/>
            </div>
            <p>短信</p>
        </div>
        <div class="box">
            <div class="img">
                <img src="../../assets/login_images/通讯录.png"/>
            </div>
            <p>通讯录</p>
        </div>
        <div class="box">
            <div class="img">
                <img src="../../assets/login_images/youtube.png"/>
            </div>
            <p>Youtube</p>
        </div>
        <div class="box">
            <div class="img">
                <img src="../../assets/login_images/facebook.png"/>
            </div>
            <p>Facebook</p>
        </div>
        <div class="box">
            <div class="img">
                <img src="../../assets/login_images/BILIBILI_LOGO (1).png"/>
            </div>
            <p>哔哩哔哩动画</p>
        </div>
        <div class="box">
            <div class="img">
                <img src="../../assets/login_images/QQ (1).png"/>
            </div>
            <p>QQ</p>
        </div>
    </div>



</div>
  
</template>

<script>
import testA from './testA.vue'
import testB from './testB.vue'

export default {
  name:'',
  data(){
    return{
     
      obj:{title:"按钮",color:"red"}
 
    }
  },
  methods:{
    change(){
     // console.log(this.$refs.btn);
     // this.title= 12432432;
      this.$refs.input.focus();
      this.$refs.h1.style.color='red';
      //this.title = this.$refs.btn.msg;//直接获取子组件中的属性
      this.title = this.$refs.btn.send(); //直接操作子组件中的方法
    },
    acceptSon(res){
     this.title = res
    }
  },
  components:{
    testA,
    testB
  }
}
</script>

<style scoped>
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