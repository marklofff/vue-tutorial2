import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/pages/HomePage'
import Login from '@/pages/Login'
import PageNotFound from '@/pages/PageNotFound'
import PostPage from '@/pages/PostPage'

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
            path: '*',
            component: PageNotFound
        }
    ]
})