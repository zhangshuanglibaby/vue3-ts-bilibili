/*
 * @Date: 2022-11-21 20:30:56
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-21 20:36:50
 * @Description: 这是****文件
 */
// 路由相关文件

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: () => import('@/views/Home/index.vue') },
  { path: '/video/:id', name: 'view', component: () => import('@/views/Video/index.vue') },
  { path: '/search', name: 'search', component: () => import('@/views/Search/index.vue') },
  { path: '/login', name: 'login', component: () => import('@/views/Login/index.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('@/views/404/index.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
