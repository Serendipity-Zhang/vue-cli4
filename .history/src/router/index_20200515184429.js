import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Banner.vue'
// 导入自定义路由
import routes from './routes'

Vue.use(VueRouter)

// const routes = [

// ]

const router = new VueRouter({
        linkActiveClass: 'selected', //默认路由样式
        routes,
        mode: 'history' // 加上这个配置项，url默认的#就不会出现了

        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return { x: 0, y: 0 }
            }
        },

    })
    // 路由前置守卫
router.beforeEach((to, from, next) => {
        if (to.meta.title) document.title = to.meta.title
        next()
    })
    // 路由后置守卫
    //router.afterEach((to, from) => {})

export default router