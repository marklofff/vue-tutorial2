import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    posts: []
  },
  getters: {
    count: state => {
      return state.count + "回クリックしたよ"
    },
    getPost: (state) => (url) => {
      return state.posts.find(post => post.url === url)
    }
  },
  // step 3
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    SET_POSTS(state, posts) {
      state.posts = posts
    }
  },
  // step 2
  actions: {
    increment({ commit }) {
      commit('increment')
    },
    decrement({ commit }) {
      commit('decrement')
    },
    setPosts({ commit }, posts) {
      commit('SET_POSTS', posts)
    }
  }
})

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
