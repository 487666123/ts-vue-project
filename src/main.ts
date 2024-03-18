// ceeateApp 用于创建 Vue 应用实例
import { createApp } from "vue"

// 引入 App 根组件
import App from "./App.vue"
// 引入 路由器
import router from "./router"
// 引入 pinia
import { createPinia } from "pinia"

// 创建 Vue 应用实例
const app = createApp(App)

// createPinia 创建一个 pinia 实例
const pinia = createPinia()
// 注册 pinia
app.use(pinia)

// 注册路由器
app.use(router)

// 挂载整个应用到 app 容器种
app.mount('#app')