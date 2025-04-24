// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '@/views/Home.vue'
import Contactanos from '@/views/Contactanos.vue'
import { path } from 'd3'
import Paises from '../views/Paises.vue'
import Mexico from '../components/coverage/Mexico.vue'
import Guatemala from '../components/coverage/Guatemala.vue'
import Conocenos from '../views/Conocenos.vue'

const routes = [
  { path: '/', name: 'inicio', component: InicioView },
  { path: '/contactanos', name: 'Contactanos', component: Contactanos },
  { path: '/nosotros', name: 'Conocenos', component: Conocenos },
    {
    path: '/paises',
    name: 'Paises',
    component: Paises,
    children: [
      {
        path: 'mexico',
        name: 'Mexico',
        component: Mexico
      },
      {
        path: 'guatemala',
        name: 'Guatemala',
        component: Guatemala
      },
      // Agregar más rutas para otros países
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
