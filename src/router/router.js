import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/content/home/Home'
import Sort from 'components/content/sort/Sort'
import Cart from 'components/content/cart/Cart'
import Profile from 'components/content/profile/Profile'
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
