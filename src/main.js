import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { URL_API, TOKEN } from './config/api'

axios.defaults.baseURL = URL_API
axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`

createApp(App)
    .use(router)
    .mount('#app')
