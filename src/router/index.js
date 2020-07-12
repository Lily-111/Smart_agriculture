import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/Page1',
    component: Page1
  },
  {
    path: '/Page2',
    component: Page2
  }
]

const router = new VueRouter({
  routes
})

export default router
