export default [
    {
        path: '/',
        name: 'login',
        component: ()=>import('../views/Login.vue')
      },
    // {
    //     path: '/', //路径
    //     name: 'Home',
    //     component: () =>
    //         import ('../views/Banner.vue') //匹配的组件
    // },
    {
        path: '/home', //路径
        component: () =>
            import ('../views/Banner.vue') //匹配的组件
    },
    {
        path: '/list', //路径
        component: () =>
            import ('../views/List.vue') //匹配的组件
    },
    {
        path: '/transfer', //路径
        component: () =>
            import ('../views/transfer.vue') //匹配的组件
    },
    {
        path: '/timeLine', //路径
        component: () =>
            import ('../views/timeLine.vue') //匹配的组件
    },
    {
        path: '/toSon', //父-子
        component: () =>
            import ('../views/FtoS/index.vue') //匹配的组件
    },
    {
        path: '/toFather', //子-父
        component: () =>
            import ('../views/StoF/index.vue') //匹配的组件
    },
    {
        path: '/actionSon', //父操作子
        component: () =>
            import ('../views/FactionS/index.vue') //匹配的组件
    },
    {
        path: '/actionSon', //父操作子
        component: () =>
            import ('../views/FactionS/index.vue') //匹配的组件
    }
]