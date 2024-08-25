import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContestSchedule from '../views/ContestSchedule.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contest_schedule',
    name: 'contest_schedule',
    component: ContestSchedule
  },
  {
    path: '/TopicDesciption',
    name: 'TopicDesciption',
    component: TopicDesciptionView
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: statistics
  }
  ,
  {
    path: '/form',
    name: 'form',
    component: FormView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
