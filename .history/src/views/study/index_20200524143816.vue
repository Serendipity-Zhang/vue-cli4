<!-- 组件说明 -->
<template>
<div class="main"> 
    <div class="panel panel-info" style="margin:20px;"> 
         <!-- 头部 text-->
        <div class="panel-heading">
            <h1>vue定制学习计划</h1>
            <div>
                <a>共有 <span class="badge" >{{items.length}}</span>个计划,</a>
                <a>已完成：<span class="badge" >{{completed}}</span></a>
                <a>未完成：<span class="badge" >{{items.length-completed}}</span></a>
            </div>
        </div>
        <div id="vue-labels">
  <h2> Choose your pet </h2>
  <div class="buttons">
    <button v-for="tab in tabs" v-bind:key="tab" v-on:click="activeTab = tab" v-bind:class="['button', { active: activeTab === tab }]">
      {{ tab }}
    </button>
  </div>
  <component v-bind:is="activeTabComponent" class="tab"></component>
  
</div>
         <!-- 内容 -->
        <div class="panel-body">
            <div class="input-group" style="display:flex;
    justify-content: space-between;"> 
              <input type="text" class="form-control text-keyword" 
                  placeholder="输入小目标后，按回车确认" v-model="input"/>
              <span class="input-group-btn">
                <button class="btn btn-primary" @click="add()" :disabled="!input">添加计划</button>
              </span>
            </div>
            <div class="btn-group btn-group-justified" >
              <a class="btn btn-default" :class="cur==1 ?'selected':''"  @click="filterItem(1)">所有计划</a>
              <a class="btn btn-default" :class="cur==2 ?'selected':''"  @click="filterItem(2)">已完成</a>
              <a class="btn btn-default" :class="cur==3 ?'selected':''"  @click="filterItem(3)">未完成</a>
            </div>

            <ul class="list-group">
              <li class="list-group-item" v-for="(v,i) in newItems" :key="i">
                  <input type="checkbox" v-model="v.check"/>
                  <span :class="v.check ?'line-through':''">{{v.name}}</span>
                  <a class="badge" @click="del(v)">删除</a>
              </li>
            </ul>
            
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
         input:'',
            cur:2,
            items:[
                {name:'学习计划1',check:true},
                {name:'学习计划2',check:false},
                {name:'学习计划3',check:false},
            ],
            newItems:[],
            activeTab: "🐰",
    tabs: ["🐰", "🐹", "🐭", "🐶", "🐱"]

      };
    },
    computed: {
         completed(){
                return this.items.filter(item=>item.check).length;
            },
    activeTabComponent: function () {
      return "tab-" + this.activeTab;
    }

    },
    methods: {
       add(){  //添加数据
                if(!this.input) return;
                this.items.unshift({name:this.input,check:false});
                this.input = ''; //清除数据
            },
            del(v){  //删除数据
               // this.items.splice(i,1);
               //findIndex
                var i = this.items.findIndex(function(item){return item.name==v.name});
                this.items.splice(i,1);
                this.filterItem(this.cur);
            },
            filterItem(n){  //筛选数据
                this.cur = n;
                switch(n){
                    case 2:
                        this.newItems = this.items.filter(item=>item.check);
                        break;
                    case 3:
                        this.newItems = this.items.filter(item=>!item.check);
                        break;
                    default:
                        this.newItems = this.items;
                }
            }

    },
mounted() {
   this.filterItem(this.cur);

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
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap");

  #vue-labels {
  background: #ffa3a330;
  border: 3px solid #ffa3a330;
  margin: 4rem auto;
  padding: 2rem;
  width: 27rem;
  border-radius: 2rem;
  .buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    .button {
      border-radius: 5rem 5rem 0 0;
      padding: 0.75rem;
      background: white;
      background: #ffa3a320;
      margin: 0.75rem 0.5rem -0.2rem;
      border: 3px solid #ffa3a3;
      font-size: 1.5rem;
    }
    .active {
      background: #ffa3a3;
      border-bottom: none;
    }
  }
  h2 {
    text-align: center;
    font-family: "Quicksand", sans-serif;
  }
  .content {
    display: flex;
    justify-content: center;
    padding: 1rem;
    border: 3px solid #ffa3a3;
    border-radius: 2rem;
    background: white;
    font-size: 5rem;
  }
}

// this is not accessible but the focus border was ugly, sorry :D
*:focus {
  outline: none;
}


input{
    font-size: 14px;
}
body,ul,div,html{
    padding: 0;
    margin: 0;
}
.hidden{
    display: none;
}
.main{
    width: 800px;
    margin: 0 auto;
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
    width: 300px;
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
    margin-top: 20px;
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