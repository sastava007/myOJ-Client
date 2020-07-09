import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DashBoard from '../views/DashBoard.vue'
import Assignments from '../views/Assignments.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/getting-started',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/courses/ds/assignments',
    name: 'Assignments',
    component: Assignments
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
