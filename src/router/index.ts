import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: '/role',
          component: () => import('@/views/role/index.vue'),
        },
        {
          path: '/role/create',
          component: () => import('@/views/role/create.vue'),
        },
        {
          path: '/user/create',
          component: () => import('@/views/user/create.vue'),
        },
        {
          path: '/user',
          component: () => import('@/views/user/index.vue'),
        },
        {
          path: '/auth/create',
          component: () => import('@/views/auth/create.vue'),
        },
        {
          path: '/auth',
          component: () => import('@/views/auth/index.vue'),
        },
        {
          path: '/order',
          component: () => import('@/views/order/index.vue'),
        },
        {
          path: '/dcm/user',
          component: () => import('@/views/dcm/user.vue'),
        },
        {
          path: '/dcm/road',
          component: () => import('@/views/dcm/road.vue'),
        },
        {
          path: '/fsdy/cinema',
          component: () => import('@/views/fsdy/cinema.vue'),
        },
        {
          path: '/fsdy/film',
          component: () => import('@/views/fsdy/film.vue'),
        },
        {
          path: '/fsdy/music',
          component: () => import('@/views/fsdy/music.vue'),
        },
      ]
    },

  ]
})

export default router
