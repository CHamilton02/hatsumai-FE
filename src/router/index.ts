import GenerateView from '@/views/GenerateView.vue'
import HistoryView from '@/views/HistoryView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/generate',
      name: 'generate',
      component: GenerateView,
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView,
    },
  ],
})

export default router
