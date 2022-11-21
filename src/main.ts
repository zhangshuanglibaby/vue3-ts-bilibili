import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.css'

createApp(App).use(router).mount('#app');
