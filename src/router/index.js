import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login')
    },
    {
        path: '/test-swiper',
        name: 'test-swiper',
        component: () => import('../views/testSwiper')
    },
    {
        path: '/test-paginate',
        name: 'test-paginate',
        component: () => import('../views/testPaginate')
    },
    {
        path: '/test-slider',
        name: 'test-slider',
        component: () => import('../views/TestSlider')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/test')
    },

    {
        path: '/',
        name: 'layout',
        component: () => import('../views/Layout.vue'),
        children: [
            {
                path: '',
                name: 'index',
                component: () => import('../views/Index/Index')
            },
            {
                path: '/show/:id',
                name: 'show',
                component: () => import('../views/Show')
            },
        ]

    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/Admin'),
        children: [
            {
                path: 'create',
                name: 'create',
                component: () => import('../views/Create')
            },
            {
                path: 'create-admin',
                name: 'create-admin',
                component: () => import('../views/CreateAdmin')
            },
            {
                path: 'images',
                name: 'images',
                component: () => import('../views/Images')
            },
        ]


    },



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
