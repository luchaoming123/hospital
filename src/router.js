const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/search',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/content_search.vue'], resolve)
    },
    {
        path: '/echart',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/echart_result.vue'], resolve)
    },
    {
        path: '/login',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/login.vue'], resolve)
    },
    {
        path: '/search_show',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/only_search.vue'], resolve)
    }
];
export default routers;