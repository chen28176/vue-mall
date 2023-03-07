/*
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-03-07 14:39:55
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-03-07 15:07:27
 * @Description: 
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // *按需引入组件样式
    vue(),
    Components({
      resolvers: [VantResolver()],
    })
  ],
  // * @符号定义路径
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    host:'0.0.0.0'
  }
})
