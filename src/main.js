import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    posts: [
      {
        id: 1,
        title: "はじめに",
        url: "new-post",
        body: "内容",
        date: new Date()
      }
    ]
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
    }
  },
  // step 2
  actions: {
    increment({ commit }) {
      commit('increment')
    },
    decrement({ commit }) {
      commit('decrement')
    }
  }
})

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
