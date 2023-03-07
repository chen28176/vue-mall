/*
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-03-07 14:39:55
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-03-07 15:18:03
 * @Description: 
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/assets/css/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
