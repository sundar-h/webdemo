import { createApp } from 'vue'
import App from './App.vue'
import naiveUI from 'naive-ui'
import router from '@/router'

const app = createApp(App)

// 用于为应用内传递的未捕获的错误指定一个全局处理函数。
app.config.errorHandler = (err, instance, info) => {
   // 向追踪服务报告错误
    console.log(err)
    console.log(instance)
    console.log(info)
}
app
   .use(naiveUI)
   .use(router)
   .mount('#app')
