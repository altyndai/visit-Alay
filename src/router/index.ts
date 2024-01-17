import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [];
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
});

export default router;
