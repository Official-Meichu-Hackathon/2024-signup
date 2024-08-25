import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contest_schedule',
    name: 'contest_schedule',
    component: HomeView
  },
  {
    path: '/TopicDesciption',
    name: 'TopicDesciption',
    component: HomeView
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: HomeView
  }
  ,
  {
    path: '/form',
    name: 'form',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
