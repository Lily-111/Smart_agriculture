import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/page1',
      name: 'page1',
      component: () => import('../views/Page1.vue')
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import('../views/Page2.vue')
    }
  ]
})
