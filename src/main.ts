/*
 * @Date: 2022-11-21 20:30:56
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-21 21:21:55
 * @Description: 这是****文件
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.css'

createApp(App).use(router).mount('#app');
