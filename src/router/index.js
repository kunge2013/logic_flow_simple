import { createRouter, createWebHistory } from 'vue-router'
import LogicFlowSimple from '../components/LogicFlowSimple.vue'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/logic-flow',
    name: 'LogicFlow',
    component: LogicFlowSimple
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 