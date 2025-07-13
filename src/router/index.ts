import ErrorView from '@/views/ErrorView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'
import GenerateView from '@/views/GenerateView.vue'
import HistoryView from '@/views/HistoryView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ProjectView from '@/views/ProjectView.vue'
import SignUpView from '@/views/SignUpView.vue'
import SuccessView from '@/views/SuccessView.vue'
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
      path: '/project/:id',
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
    {
      path: '/sign-up',
      name: 'sign up',
      component: SignUpView,
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorView,
    },
    {
      path: '/forgot-password',
      name: 'forgot password',
      component: ForgotPasswordView,
    },
    {
      path: '/forgot-password/success',
      name: 'forgot password success',
      component: SuccessView,
      props: {
        header: 'Password Reset Email Sent',
        body: 'Follow the link in your inbox to reset your password. This link will expire in 10 minutes.',
        icon: 'line-md:email',
      },
    },
  ],
})

export default router
