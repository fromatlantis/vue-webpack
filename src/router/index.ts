import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BasicLayout from '../layouts/BasicLayout.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        meta: { title: '资产交换', icon: '' },
        redirect: '/home',
        component: BasicLayout,
        children: [
            {
                path: 'home',
                component: Home,
            },
            {
                path: 'about',
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
            },
        ],
    },
    {
        path: '*',
        component: () => import(/* webpackChunkName: "fail" */ '../views/exception/404.vue'),
        hidden: true,
    },
]

const router = new VueRouter({
    routes,
})

export default router
