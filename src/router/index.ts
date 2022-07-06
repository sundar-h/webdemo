import { Layout } from '@/router/constant';
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const RootRoute: RouteRecordRaw = {
   path: '/',
   name: 'home',
   component: Layout,
   meta: { title: '首页', hide: true },
};

// const AboutRoute: RouteRecordRaw = {
//    path: '/bout',
//    name: 'About',
//    component: Layout,
//    meta: {
//       isRoot: true,
//       title: 'Root',
//    },
//    children: [
//       {
//          path: 'index',
//          name: `about_index`,
//          meta: {
//             title: '关于',
//             // extra: renderNew(),
//             activeMenu: 'about_index',
//          },
//          component: () => import('@/views/about/index.vue'),
//       },
//    ],
// };

const routes: Array<RouteRecordRaw> = [
   RootRoute,
   // AboutRoute,
]
// const routes = [
//    { path: '/', component: import('@/views/about/index.vue')},
//    // { path: '/about', component: About },
// ]


const router = createRouter({
   history: createWebHashHistory(),
   // strict: true,
   routes, // `routes: routes` 的缩写
})

export default router;