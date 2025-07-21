import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import LogicFlow from '../components/LogicFlow.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/basic',
      name: 'basic',
      component: LogicFlow
    },
    {
      path: '/custom-node',
      name: 'custom-node',
      component: () => import('../components/CustomNode.vue')
    },
    {
      path: '/custom-edge',
      name: 'custom-edge',
      component: () => import('../components/CustomEdge.vue')
    }
  ]
})

export default router 