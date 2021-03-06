import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/font/iconfont.css'  //字体图标  
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment'
import 'moment/locale/zh-cn'
//import './assets/css/news.css'  

moment.locale('zh-cn')

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// new Vue({
//   el:'#app',
//   router,
//   store,
//   components:{App},
//   template:'<App />'
// })
// render:function(createElement){
//   return createElement(App)
// }
// h是createElement  别名
