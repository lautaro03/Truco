import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import Juego from '@/components/Juego'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/Juego',
      name: 'Juego',
      component: Juego
    }
  ]
})
