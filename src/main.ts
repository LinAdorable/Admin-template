/*
 * @Author: Mr.Lin
 * @Date: 2024-03-22 09:50:15
 * @LastEditTime: 2024-03-22 16:51:47
 * @LastEditors: Mr.Lin
 * @Description:
 * @FilePath: \technical-drill\src\main.ts
 */
import { createApp } from 'vue'
import App from '@/App.vue'
// 引入 sorte 
import store  from '@/store'
// 引入路由
import router from '@/router'
// 引入全局样式
import '@/styles/global.scss'

import 'virtual:svg-icons-register';

 const app = createApp(App)
 
 app.use(router).use(store).mount('#app')
