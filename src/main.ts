import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// 状态管理工具
import pinia from '@/stores'
import router from '@/router'
// 拖拽
import VueDragResize from 'vue-drag-resize/src'
// 阿里iconfont
import './assets/iconfont/iconfont.js'
// import '@/styles/variable.scss'

const app = createApp(App)
app.use(pinia).use(router).use(VueDragResize).mount('#app')