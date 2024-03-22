/*
 * @Author: Mr.Lin
 * @Date: 2024-03-22 14:13:03
 * @LastEditTime: 2024-03-22 16:56:24
 * @LastEditors: Mr.Lin
 * @Description: 
 * @FilePath: \technical-drill\src\store\user.ts
 */
import { defineStore } from "pinia";
// 第一个参数是应用程序中 store 的唯一 id
export default defineStore(
  'userStore', {
  // 其它配置项
  state() {
    return {
      userName: '',
      token: '',
    }
  },
  actions: {
    updateUserName(data: string) {
      this.userName = data
    },
    uodateToken(data: string) {
      this.token = data
    }
  },
   // 进行持久化存储
  persist: true
})