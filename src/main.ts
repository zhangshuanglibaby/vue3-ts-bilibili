/*
 * @Date: 2022-11-21 20:30:56
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-22 22:03:20
 * @Description: 这是****文件
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.css'

// 引入mock
import '@/mock/index'

createApp(App).use(router).mount('#app');
