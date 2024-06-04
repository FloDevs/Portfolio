import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/myHome.vue";

import Error from "../pages/myError.vue";

const routes = [
  {
    path: "/creations",
    name: "Creations",
    component: Error,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/error",
    name: "Error",
    component: Error,
  },
  {
    path: "/contacts",
    name: "Contact",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: false,
});

export default router;
