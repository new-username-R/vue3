import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('../view/Home.vue'),
      // children: [
      //   {
      //     path: 'child',
      //     name: 'Child',
      //     component: () => import('../view/child.vue')
      //   }
      // ]
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('../view/search.vue')
    },
     {
      path: '/',
      redirect: 'home'
    }
  ],
})
export default router