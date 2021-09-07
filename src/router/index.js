import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import productList from '../views/productList.vue'

// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/productList',
    component: productList,
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
})
export default router
