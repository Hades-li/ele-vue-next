import { createRouter, createWebHistory } from 'vue-router'
import Button from '../views/Button.vue'

const routes = [
  {
    path: '/',
    name: 'button',
    component: Button
  },
  {
    path: '/layout',
    name: 'Layout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "layout" */ '../views/Layout.vue')
  },
  {
    path: '/container',
    name: 'Container',
    component: () => import(/* webpackChunkName: "container" */ '../views/Container.vue')
  },
  {
    path: '/link',
    name: 'Link',
    component: () => import(/* webpackChunkName: "link" */ '../views/Link.vue')
  },
  {
    path: '/radio',
    name: 'Radio',
    component: () => import(/* webpackChunkName: "link" */ '../views/Radio.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
