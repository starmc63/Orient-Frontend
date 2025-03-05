import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path: '/index',
      component: Layout,
      children: [
        {
          path: '',
          name: 'index',
          component: () => import('@/views/index.vue')
        }
      ]
    },
    {
      path: '/user',
      component: Layout,
      children: [
        {
          path: 'profile',
          name: 'user-profile',
          component: () => import('@/views/User/index.vue')
        }
      ]
    }
  ],
})

export default router
