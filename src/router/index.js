import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Macabéa',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/rooms',
    name: 'Quartos',
    component: () => import('../views/Rooms.vue')
  },
  {
    path: '/tour',
    name: 'Passeios',
    component: () => import('../views/Tour.vue')
  },
  {
    path: '/package',
    name: 'Pacotes',
    component: () => import('../views/Package.vue')
  },
  {
    path: '/contact',
    name: 'Contato',
    component: () => import('../views/Contact.vue')
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
 
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
