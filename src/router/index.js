/*
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-03-07 14:39:55
 * @LastEditors: 86 10976595+chenruiho@user.noreply.gitee.com
 * @LastEditTime: 2023-03-13 20:08:26
 * @Description: 
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  // *映射关系: path -> component
  routes: [
    {
      path: "/",
      redirect: "/splash-screen"
    },
    {
      // 闪屏页
      path: '/splash-screen',
      component: () => import("@/views/splash-screen.vue"),
    },
    {
      // 登录
      path: "/login",
      component: () => import("@/views/login/login.vue"),
            // todo 用于隐藏下方标签栏
            meta: {
              hideTadBar: true
            },
    },
    {
      // 注册
      path: "/register",
      component: () => import("@/views/login/register.vue"),
      // todo 用于隐藏下方标签栏
      meta: {
        hideTadBar: true
      },
    },
    {
      // 首页
      path: "/home",
      component: () => import("@/views/home/home.vue"),
    },
    {
      // 管理
      path: "/manage",
      component: () => import("@/views/manage/manage.vue")
    },
    {
      // 用户
      path: "/user",
      component: () => import("@/views/user/user.vue"),
    },
    {
      // 搜索用户
      path: "/search",
      component: () => import("@/views/search/search.vue"),
    },
  ]
})

export default router
