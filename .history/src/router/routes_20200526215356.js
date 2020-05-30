export default [
    {
        path: '/',
        name: 'login',
        component: ()=>import('../views/Login.vue')
      },
      {
          path:'/',
          component: ()=>import('../layout/index'),
          redirect: '/home', 
          children:[
            {
              path: 'home',
              name: 'home',
              component: ()=>import('../views/home'),
              meta:{
                title:'首页'
              }
            }
          ]

      },
      {
        path: '/list', 
        component: ()=>import('../layout/index'),
        redirect:'/List',
        children:[
          {
            path: '/List',
            component: ()=>import('../views/List.vue'),
            meta:{
              title:'列表页'
            }
          }
        ]
      },
      {
        path: '/toSon', 
        component: ()=>import('../layout/index'),
        redirect:'/toSon',
        children:[
          {
            path: '/toSon',
            component: ()=>import('../views/FtoS/index.vue'),
            meta:{
              title:'父传子'
            }
          }
        ]
      },
      {
        path: '/toFather', 
        component: ()=>import('../layout/index'),
        redirect:'/toFather',
        children:[
          {
            path: '/toFather',
            component: ()=>import('../views/StoF/index.vue'),
            meta:{
              title:'子传父'
            }
          }
        ]
      },
      {
        path: '/toFather', 
        component: ()=>import('../layout/index'),
        redirect:'/toFather',
        children:[
          {
            path: '/toFather',
            component: ()=>import('../views/StoF/index.vue'),
            meta:{
              title:'子传父'
            }
          }
        ]
      },
      {
        path: '/brother', 
        component: ()=>import('../layout/index'),
        redirect:'/brother',
        children:[
          {
            path: '/brother',
            component: ()=>import('../views/Brother/index.vue'),
            meta:{
              title:'子传父'
            }
          }
        ]
      },
      {
        path: '/study', 
        component: ()=>import('../layout/index'),
        redirect:'/brother',
        children:[
          {
            path: '/study',
            component: ()=>import('../views/study/index.vue'),
            meta:{
              title:'制定学习计划'
            }
          }
        ]
      },
      {
        path: '/comp1', 
        component: ()=>import('../layout/index'),
        redirect:'/comp1',
        children:[
          {
            path: '/comp1',
            component: ()=>import('../views/Comp/index.vue'),
            meta:{
              title:'动态组件',
              keepAlive:true
            }
          }
        ]
      },
      {
        path: '/actionSon', 
        component: ()=>import('../layout/index'),
        redirect:'/actionSon',
        children:[
          {
            path: '/actionSon',
            component: ()=>import('../views/FactionS/index.vue'),
            meta:{
              title:'时间轴'
            }
          }
        ]
      },
      {
        path: '/transfer', 
        component: ()=>import('../layout/index'),
        redirect:'/transfer',
        children:[
          {
            path: '/transfer',
            component: ()=>import('../views/transfer.vue'),
            meta:{
              title:'点击添加'
            }
          }
        ]
      },
      {
        path: '/watch', 
        component: ()=>import('../layout/index'),
        redirect:'/watch',
        children:[
          {
            path: '/watch',
            component: ()=>import('../views/watch/index.vue'),
            meta:{
              title:'watch监听'
            }
          }
        ]
      },
      {
        path: '/timeLine', 
        component: ()=>import('../layout/index'),
        redirect:'/timeLine',
        children:[
          {
            path: '/timeLine',
            component: ()=>import('../views/timeLine.vue'),
            meta:{
              title:'时间轴'
            }
          }
        ]
      },
      {
        path: '/AddFriend', 
        component: ()=>import('../layout/index'),
        redirect:'/AddFriend',
        children:[
          {
            path: '/AddFriend',
            component: ()=>import('../views/AddFriend.vue'),
            meta:{
              title:'时间轴'
            }
          }
        ]
      },
      {
        path: '/canvas', 
        component: ()=>import('../layout/index'),
        redirect:'/brother',
        children:[
          {
            path: '/canvas',
            component: ()=>import('../views/canvas/index.vue'),
            meta:{
              title:'canvas'
            }
          }
        ]
      },
]

// Vue-详解设置路由导航的两种方法： <router-link :to="..."> 和router.push(...)
// 	//声明式  <router-link :to="...">		
// 	//编程式  router.push(...)

// // 声明式的常见方式
// <router-link to="/home">home</router-link>
// // 对象
// <router-link :to="{path:'/home'}">home</router-link>
// // 路由通过名称
// <router-link :to="{name: 'homename'}">home</router-link>
// //直接路由带查询参数query，地址栏变成 /home?id=10
// <router-link :to="{path: 'home', query: {id: 10 }}">home</router-link>
// // 命名路由带查询参数query，地址栏变成/home?id=10
// <router-link :to="{name: 'homename', query: {id: 10 }}">home</router-link>
// //直接路由带路由参数params，params 不生效，如果提供了 path，params 会被忽略
// <router-link :to="{path: 'home', params: { id: 10 }}">home</router-link>
// // 命名路由带路由参数params，地址栏是/home/10
// <router-link :to="{name: 'homename', params: { id: 10 }}">home</router-link>


// 二、router.push(...)方法
// // 字符串
// router.push('/home')
// // 对象
// router.push({path:'/home'})
// // 路由通过名称
// router.push({name: 'homename'})
// //直接路由带查询参数query，地址栏变成 /home?id=10
// router.push({path: 'home', query: {id: 10 }})
// // 命名路由带查询参数query，地址栏变成/home?id=10
// router.push({name: 'homename', query: {id: 10 }})
// //直接路由带路由参数params，params 不生效，如果提供了 path，params 会被忽略
// router.push({path:'homename', params:{ id: 10 }})
// // 命名路由带路由参数params，地址栏是/home/10
// router.push({name:'homename', params:{ id: 10 }})
