import Vue from 'vue'
import Router from 'vue-router'
import counter from '../pages/counter/index.vue'
import index from '../pages/index/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index,
    alias: '/pages/index/main'
  }, {
    path: '/counter',
    name: 'counter',
    component: counter,
    alias: '/pages/counter/main'
  }]
})
