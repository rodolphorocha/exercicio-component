
import './assets/main.css'
import '@mdi/font/css/materialdesignicons.min.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(router)
app.mount('#app')

