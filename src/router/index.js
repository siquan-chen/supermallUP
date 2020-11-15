import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/home');
const Shopping = () => import("views/category/shopping");
const Sort = () => import('views/cart/sort');
const Trolley = () => import('views/Trolley/trolley')
const Files = () => import('views/profile/files');


Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/home',
    title : "首页"
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title: "首页"
    },
  },
  {
    path: '/Shopping',
    component: Shopping,
    title : "商城"
  },
  {
    path: '/Sort',
    component: Sort,
    title : "分类"
  },
  {
    path: '/trolley',
    component: Trolley,
    meta:{
      title: "购物车"
    }
  },
  {
    path: '/Files',
    component: Files,
    title : "我的"
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

export default router
