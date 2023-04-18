import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import FirebseView from '../views/FirebaseView.vue'
import SocialViewVue from '@/views/SocialView.vue'
import AWSView from '@/views/AWSView.vue'
import AzureView from '@/views/AzureView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/firebase',
    name: 'firebase',
    component: FirebseView
  },
  {
    path: '/social',
    name: 'social',
    component: SocialViewVue
  },
  {
    path: '/aws',
    name: 'aws',
    component: AWSView
  },
  {
    path: '/azure',
    name: 'azure',
    component: AzureView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
