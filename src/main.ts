import { createApp } from 'vue'
import App from './App.vue'
//引入全局组件
import router from '../src/router'
import test from '../src/components/test.vue'
const app = createApp(App)
app.component('Test', test)
app.use(router)

app.mount('#app')
