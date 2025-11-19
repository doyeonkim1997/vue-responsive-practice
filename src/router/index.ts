import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
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
        path: "sales",
        name: "SalesDetail",
        component: () => import("@/pages/SalesDetail.vue"),
      },
      {
        path: "conversion",
        name: "ConversionDetail",
        component: () => import("@/pages/ConversionDetail.vue"),
      },
      {
        path: "avg-stay",
        name: "AvgStayDetail",
        component: () => import("@/pages/AvgStayDetail.vue"),
      },

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
