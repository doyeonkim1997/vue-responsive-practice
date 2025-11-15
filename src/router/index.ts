import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

import Home from "@/pages/Home.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Settings from "@/pages/Settings.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", name: "Home", component: Home },
      { path: "dashboard", name: "Dashboard", component: Dashboard },
      { path: "settings", name: "Settings", component: Settings },
      {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
