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
        path: '/list',     //贷款申请
        component: ()=>import('../layout/index'),
        redirect:'/loan-input/index',
        children:[
          {
            path: 'index',
            name: 'loan-input',
            component: ()=>import('../views/List.vue'),
            meta:{
              title:'贷款申请'
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