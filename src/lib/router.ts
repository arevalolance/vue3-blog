import BlogPage from '@/pages/BlogPage.vue'
import HomePage from '@/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => HomePage
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => BlogPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
