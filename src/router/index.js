import { createRouter, createWebHashHistory } from 'vue-router'
// import beforeEach from "./baforeEach";
import orders from './routeList/orders';
import products from "./routeList/products.js";

export const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    component: () => import("../views/index.vue"),
    name: "index",
    meta: {
      title: '首页',
    }
  },
  ...orders,
    ...products
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})


//路由拦截器
// router.beforeEach((to, from, next) => {
//     beforeEach(to, from, next)
// })

export default router