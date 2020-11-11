import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
// import Home from 'views/Home.vue'
const Home = () => import('../views/home/home');
const Shopping = () => import("../views/category/shopping");
const Sort = () => import('../views/cart/sort');
const Files = () => import('../views/profile/files');
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/Shopping',
    component: Shopping
  },
  {
    path: '/Sort',
    component: Sort
  },
  {
    path: '/Files',
    component: Files
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
