import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/home/Home'
import Sort from 'views/sort/Sort'
import Cart from 'views/cart/Cart'
import Profile from 'views/profile/Profile'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/sort',
      component:Sort
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/profile',
      component:Profile
    },
  ]
})
