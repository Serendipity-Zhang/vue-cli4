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
              title:'穿梭框'
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
]