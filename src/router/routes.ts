import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    component: () => import('@/components/TMain/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index'),
  },
]
