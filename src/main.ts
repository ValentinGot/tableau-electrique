import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './app.routes'
import App from './App.vue'
import './css/main.css'

const app = createApp(App)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
app.use(router)

app.mount('#app')
