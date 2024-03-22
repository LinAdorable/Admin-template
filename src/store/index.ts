/*
 * @Author: Mr.Lin
 * @Date: 2024-03-22 14:09:23
 * @LastEditTime: 2024-03-22 16:55:54
 * @LastEditors: Mr.Lin
 * @Description: 
 * @FilePath: \technical-drill\src\store\index.ts
 */

import { createPinia } from "pinia";
// pinia 持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const store = createPinia()

store.use(piniaPluginPersistedstate)

export default store