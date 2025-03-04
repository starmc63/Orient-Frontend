import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/index'
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('@/views/login.vue')
    },
    {
      path:'/index',
      name:'index',
      component: () => import('@/layout/index.vue'),
    }
  ],
})

export default router
