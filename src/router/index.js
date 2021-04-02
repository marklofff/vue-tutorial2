import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/pages/HomePage'
import Login from '@/pages/Login'
import PageNotFound from '@/pages/PageNotFound'
import PostPage from '@/pages/PostPage'
import CategoryPage from '@/pages/CategoryPage'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/post/:id',
            name: 'post',
            component: PostPage
        },
        {
            path: '/categories/:name',
            component: CategoryPage
        },
        {
            path: '*',
            component: PageNotFound
        },
    ]
})