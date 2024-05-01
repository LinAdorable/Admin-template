/*
 * @Author: Mr.Lin
 * @Date: 2024-03-22 14:18:51
 * @LastEditTime: 2024-03-22 17:10:46
 * @LastEditors: Mr.Lin
 * @Description: 
 * @FilePath: \technical-drill\src\router\index.ts
 */
import Layout from '@layouts/index.vue'

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue')
  },
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component:Layout,
    children:[
      
    ]
  }
]
const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router