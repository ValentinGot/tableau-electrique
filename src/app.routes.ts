import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('@/pages/Index.vue') },
  { path: '/impression', component: () => import('@/pages/impression/Impression.vue') }
]
