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
            //name: 'loan-input',
            component: ()=>import('../views/List.vue'),
            meta:{
              title:'列表页'
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
            //name: 'loan-input',
            component: ()=>import('../views/transfer.vue'),
            meta:{
              title:'穿梭框'
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
            //name: 'loan-input',
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
            //name: 'loan-input',
            component: ()=>import('../views/StoF/index.vue'),
            meta:{
              title:'子传父'
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
            path: '/toFather',
            //name: 'loan-input',
            component: ()=>import('../views/StoF/index.vue'),
            meta:{
              title:'子传父'
            }
          }
        ]
      },

    // {
    //     path: '/', //路径
    //     name: 'Home',
    //     component: () =>
    //         import ('../views/Banner.vue') //匹配的组件
    // },
    // {
    //     path: '/home', //路径
    //     component: () =>
    //         import ('../views/home.vue') //匹配的组件
    // },
    // {
    //     path: '/list', //路径
    //     component: () =>
    //         import ('../views/List.vue') //匹配的组件
    // },
    // {
    //     path: '/transfer', //路径
    //     component: () =>
    //         import ('../views/transfer.vue') //匹配的组件
    // },
    // {
    //     path: '/timeLine', //路径
    //     component: () =>
    //         import ('../views/timeLine.vue') //匹配的组件
    // },
    // {
    //     path: '/toSon', //父-子
    //     component: () =>
    //         import ('../views/FtoS/index.vue') //匹配的组件
    // },
    // {
    //     path: '/toFather', //子-父
    //     component: () =>
    //         import ('../views/StoF/index.vue') //匹配的组件
    // },
    // {
    //     path: '/actionSon', //父操作子
    //     component: () =>
    //         import ('../views/FactionS/index.vue') //匹配的组件
    // },
    // {
    //     path: '/actionSon', //父操作子
    //     component: () =>
    //         import ('../views/FactionS/index.vue') //匹配的组件
    // }
]