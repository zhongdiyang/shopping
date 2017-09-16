import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/Home'
import Login from '@/view/Login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      // 设置需要登录的属性
      meta: {
        requireAuth: true
      }
    }
  ]
})
// 加载路由进行检查时用
router.beforeEach((to, from, next) => {
  console.log(to)
  // 检查是否需要登录
  if (to.matched.some(res => res.meta.requireAuth)) {
    // if (sessionStorage.getItem('shop_user')) {
    //   next()
    //   alert('您还未登录，正在跳转到登录页面，请稍后。。')
    //   setTimeout(() => {
    //     next({
    //       path: '/login',
    //       component: Login
    //     })
    //   }, 2000)
    // }
    next()
  } else {
    next()
  }
})

export default router
