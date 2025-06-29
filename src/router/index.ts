import GenerateView from '@/views/GenerateView.vue'
import HistoryView from '@/views/HistoryView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ProjectView from '@/views/ProjectView.vue'
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
      path: '/project',
      name: 'project',
      component: ProjectView,
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
})

export default router
