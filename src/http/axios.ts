/*
 * @Author: Mr.Lin
 * @Date: 2024-03-22 15:10:39
 * @LastEditTime: 2024-03-22 16:37:20
 * @LastEditors: Mr.Lin
 * @Description: axios 封装 请求拦截、响应拦截、错误统一处理
 * @FilePath: \technical-drill\src\http\axios.ts
 */
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getStorage, removeAll } from "@/utils/storage";

// 创建Aiosx 实例

const service: AxiosInstance  = axios.create({
  baseURL: '/',
  timeout: 50000,
  headers: { 'Content-Type': 'application/json' }
})

// 请求拦截

service.interceptors.request.use((config) => {
  // 请求头携带token
  const token = getStorage('Token')
  if (token) config.headers!['Authorization'] = token
  // 
  return config
},
(error) => {
  return Promise.reject(error)
}
)

// 响应 拦截器

service.interceptors.response.use((res) => {
  //返回数据
  if (res.status !== 200) {
    const data = res.data
    // 请求失败
    if (data.code === 401 || data.code === 4001) {
      // 清空缓存 返回制定页面
      removeAll();
      window.location.href = '/home';

    }
    return Promise.reject(res)
  }else {
    return res.data;
  }



},
(error) => {
  return Promise.reject(error);
})

export default service
