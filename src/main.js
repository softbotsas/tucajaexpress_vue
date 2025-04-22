// src/main.js
import './assets/css/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'gridstack/dist/gridstack.min.css'


createApp(App).use(router).mount('#app')
