import { createApp } from 'vue'
import './tailwind.css'
import App from './AppFront.vue' // App.vue
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// app.use(VueFormulate)
app.use(router)
app.mount('#app')
