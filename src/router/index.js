import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/pages/HomePage'
import Login from '@/pages/Login'
import PageNotFound from '@/pages/PageNotFound'
import PostPage from '@/pages/PostPage'
import CategoryPage from '@/pages/CategoryPage'
import AboutPage from '@/pages/AboutPage'

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
      path: '/about',
      name: 'About',
      component: AboutPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/post/:url',
      name: 'post',
      component: PostPage
    },
    {
      path: '/categories/:id',
      component: CategoryPage
    },
    {
      path: '*',
      component: PageNotFound
    },
  ]
})