import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/home/homeRegister.views.vue')
    },
    {
      path: '/consulta_dados',
      name: 'Consulta dados',
      
      component: () => import('../views/consulta/consulta.viwes.vue')
    }
  ]
})

export default router
