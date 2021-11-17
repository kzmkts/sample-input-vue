import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home.vue'
// import Form from '@/pages/form.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // meta: { layout: 'empty' }
  },
  {
    path: '/form',
    name: 'form',
    component: import(/* webpackChunkName: "form" */ '@/pages/form.vue'),
    // meta: { layout: 'empty' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

// router.beforeEach((to, from, next) => {
//   state.showOverlay = false
//   next()
// },)

export default router
