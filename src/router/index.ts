import { Layout } from '@/router/constant';
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const RootRoute: RouteRecordRaw = {
   path: '/',
   name: 'home',
   component: Layout,
   meta: { title: '首页', hide: true },
};

const AboutRoute: RouteRecordRaw = {
   path: '/about',
   name: 'about',
   component: () => import('@/views/about/index.vue'),
   meta: { title: '关于', hide: true },
};


const routes: Array<RouteRecordRaw> = [
   RootRoute,
   AboutRoute,
]


const router = createRouter({
   history: createWebHashHistory(),
   // strict: true,
   routes, // `routes: routes` 的缩写
})

export default router;