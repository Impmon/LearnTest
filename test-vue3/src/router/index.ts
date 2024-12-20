import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/user/:id',
      component: () => import('../views/UserView.vue'),
      children: [
        {
          path: '',
          name: 'user',
          component: () => import('../views/User/UserInfoView.vue'),
        },
        {
          // 当 /user/:id/profile 匹配成功
          // UserProfile 将被渲染到 User 的 <router-view> 内部
          path: 'profile',
          component: () => import('../views/User/UserProfile.vue'),
        },
      ],
    },
    {
      path: '/ant-design',
      name: 'ant-design',
      component: () => import('../views/antDesign/index.vue'),
    },
  ],
})

export default router
