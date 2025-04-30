// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '@/views/Home.vue'
import Contactanos from '@/views/Contactanos.vue'
import { path } from 'd3'
import Paises from '../views/Paises.vue'
import Mexico from '../components/coverage/Mexico.vue'
import Guatemala from '../components/coverage/Guatemala.vue'
import Conocenos from '../views/Conocenos.vue'
import Puerta from '../views/Puerta.vue'
import ElSalvador from '@/components/coverage/El-Salvador.vue'
import Honduras from '@/components/coverage/Honduras.vue'
import Nicaragua from '@/components/coverage/Nicaragua.vue'
import Rutas from '@/views/Rutas.vue'
import QuoteView from '@/views/QuoteView.vue'
import QuoteForm from '@/components/QuoteForm.vue'

const routes = [
  { path: '/', name: 'inicio', component: InicioView },
  { path: '/contactanos', name: 'Contactanos', component: Contactanos },
  { path: '/conocenos', name: 'Conocenos', component: Conocenos },
  { path: '/puerta-puerta', name: 'Puerta a Puerta', component: Puerta },
  { path: '/rutas', name: 'Rutas en EEUU', component: Rutas },
  {
    path: '/cotizar-form',
    name: 'QuoteForm',
    component: QuoteForm
  },
  {
    path: '/cotizar',
    name: 'QuoteView',
    component: QuoteView
  },
  
  {
    path: '/tracking-results',
    name: 'tracking-results',
    component: () => import('../views/TrackingResults.vue'),
    props: (route) => ({
      query: route.query
    })
  },
    {
    path: '/paises',
    name: 'Paises',
    component: Paises,
    children: [
      {
        path: 'el-salvador',
        name: 'El Salvador',
        component: ElSalvador
      },
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
      {
        path: 'honduras',
        name: 'Honduras',
        component: Honduras
      },
      {
        path: 'nicaragua',
        name: 'Nicaragua',
        component: Nicaragua
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
