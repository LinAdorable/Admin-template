/*
 * @Author: Mr.Lin
 * @Date: 2024-03-22 09:50:15
 * @LastEditTime: 2024-03-22 17:20:14
 * @LastEditors: Mr.Lin
 * @Description:
 * @FilePath: \technical-drill\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // 提供 Vue 3 单文件组件支持
/**
 * node.js内置的功能，但是node.js本身并不支持ts
 * 需要引入 @types/node ts 类型检查提示错误
 */
import { resolve, join } from 'node:path'
// 图片优化
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// 以组件的形式加载Svg
import svgLoader from 'vite-svg-loader';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [join(__dirname, '/src/assets/icons')],
      // 指定symbolId格式，就是svg.use使用的href
      symbolId: 'icon-[name]'
    }),
    svgLoader()
  ],
  server: {
    port: 9109,
    open: true, // 启动项目打开浏览器
    hmr: true, // 热更新
    proxy: { // 服务器配置自定义代理规则
      // 代理http、https 服务
      '/api': {
        target: 'http:test.server.com', // 服务地址
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务器，
        rewrite: (path) => path.replace(/^\/api/, '') // 将接口地址中的/api替换换
      },
      // websocket 代理
      '/socket.io': {
        target: 'ws:localhot:9109',
        ws: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@components': resolve(__dirname, 'src/components'),
      '@directive': resolve(__dirname, 'src/directive'),
      '@http': resolve(__dirname, 'src/http'),
      '@store': resolve(__dirname, 'src/store'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 这里配置 xxx.scss 混合文件的全局引入
        // additionalData: `@import "./src/styles/variables.scss";`
      }
    }
  }

})
