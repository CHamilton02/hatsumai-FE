import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/generate',
      name: 'generate',
      component: () => import('@/views/GenerateView.vue'),
    },
    {
      path: '/project/:id',
      name: 'project',
      component: () => import('@/views/ProjectView.vue'),
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('@/views/HistoryView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/sign-up',
      name: 'sign up',
      component: () => import('@/views/SignUpView.vue'),
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('@/views/ErrorView.vue'),
    },
    {
      path: '/forgot-password',
      name: 'forgot password',
      component: () => import('@/views/ForgotPasswordView.vue'),
    },
    {
      path: '/forgot-password/success',
      name: 'forgot password success',
      component: () => import('@/views/SuccessView.vue'),
      props: {
        header: 'Password Reset Email Sent',
        body: 'Follow the link in your inbox to reset your password. This link will expire in 10 minutes.',
        icon: 'line-md:email',
      },
    },
    {
      path: '/reset-password',
      name: 'reset password',
      component: () => import('@/views/ResetPasswordView.vue'),
    },
  ],
})

export default router
