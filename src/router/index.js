import { createRouter, createWebHistory } from 'vue-router'
// import Vue from 'vue'
// import VueRouter from 'vue-router'

const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path: '/home',
    component:() => import('views/home/home')
  },
  {
    path:'/cart',
    component:() => import('views/cart/cart')
  },
  {
    path:'/profile',
    component:() => import('views/profile/profile')
  },
  {
    path:'/category',
    component:() => import('views/category/category')
  },
  {
    path:'/detail/:iid',
    component:() => import('views/detail/detail')
  },

]

const router = createRouter({
  history: createWebHistory(),
  mode:'history',
  routes
})

export default router
