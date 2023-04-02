// Composables
import { createRouter, createWebHistory } from "vue-router";
import LoginVue from "@/views/Login.vue";
import PersonVue from "@/views/Person.vue";
import ProviderVue from "@/views/Provider.vue";
import TelemedVue from "@/views/Telemed.vue";
import ServiceVue from "@/views/Service.vue";
import PracticeVue from "@/views/Practice.vue"

// router
const routes = [
  {
    path: "/",
    // component: () => import("@/layouts/default/Default.vue"),
    component: () => import("@/layouts/layout1/Layout1.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "/ncd",
        name: "Ncd",
        component: () => import("@/views/Ncd.vue"),
      },
      {path: "/person", name: "person", component: PersonVue},
      {
        path: "/provider",
        name: "Providr",
        component: ProviderVue,
      },
      {
        path: "/telemed",
        name: "Telemed",
        component: TelemedVue,
      },
      {
        path: "/login",
        name: "login",
        component: LoginVue,
      },
      {
        path: "/service",
        name: "service",
        component: ServiceVue,
      },
      {
        path: "/practice",
        name: "practice",
        component: PracticeVue
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
