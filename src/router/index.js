// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '@/views/Home.vue'
import NosotrosView from '@/views/Nosotros.vue'

const routes = [
  { path: '/', name: 'inicio', component: InicioView },
  { path: '/nosotros', name: 'nosotros', component: NosotrosView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
