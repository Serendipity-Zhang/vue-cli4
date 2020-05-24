<!-- 组件说明 -->
<template>
  <div class="">
    <!-- <Nav /> -->
    <div>
      <!-- <router-view /> -->
    </div>
    <!--  -->
    <div id="content" v-bind:style="contentStyle" @click="clicked">
      <div class="wrapper">
        <p v-bind:style="instructionsStyle">{{ instruction }}</p>
        <h1 v-if="one" v-bind:class="faded">{{ timeOne }}</h1>
        <h1 v-if="two" v-bind:class="faded">{{ timeTwo }}</h1>
        <h1 v-if="three" v-bind:class="faded">{{ timeThree }}</h1>
        <h1 v-if="four" v-bind:class="faded">{{ timeFour }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
// import Nav from './Nav'
import moment from 'moment'
export default {
  components: {
    //  Nav
  },
  data() {
    return { 	contentStyle: {
			backgroundColor: "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})
		},
		timeOne: moment().format('LTS'),
		timeTwo: moment().format('l'),
		timeThree: moment().format('MMMM Do YY'),
		timeFour: moment().format('LT'),
		one: true,
		two: false,
		three: false,
		four: false,
		faded: '',
		instruction: "Click anywhere to change the clock's format",
		instructionsStyle: {
			opacity: 1,
			transition: '.2s'
		}
    };
  },
  computed: {},
  methods: {
    clicked() {
      this.contentStyle.backgroundColor = "#000000".replace(/0/g, function() {
        return (~~(Math.random() * 16)).toString(16);
      });
      this.instructionsStyle.opacity = 0;
      if (this.one == true) {
        this.faded = "faded";
        setTimeout(() => {
          this.faded = "";
          this.one = false;
          this.two = true;
        }, 200);
      } else if (this.two == true) {
        this.faded = "faded";
        setTimeout(() => {
          this.faded = "";
          this.two = false;
          this.three = true;
        }, 200);
      } else if (this.three == true) {
        this.faded = "faded";
        setTimeout(() => {
          this.faded = "";
          this.three = false;
          this.four = true;
        }, 200);
      } else if (this.four == true) {
        this.faded = "faded";
        setTimeout(() => {
          this.faded = "";
          this.four = false;
          this.one = true;
        }, 200);
      }
    },
  },
  mounted() {
    console.log(moment().format("LTS"));
    
    setInterval(() => {
      this.timeOne = moment().format("LTS");
    }, 1000);
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style scoped>
#content {
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;

  transform: .5s;

}
</style>

/**
  mounted(){//生命周期模板挂载之后
      let _this=this;
      this.timer=setInterval(()=>{
          _this.nowtime=new Date();
      },1000)
  },
  beforeDestroy(){//生命周期实例销毁之前
     if(this.timer){
        clearInterval(this.timer);
    }
 }  
 */
