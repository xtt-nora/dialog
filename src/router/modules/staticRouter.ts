import { RouteRecordRaw } from "vue-router";
import { HOME_URL } from "@/config";
/**
 * staticRouter(静态路由)
 */
export const staticRouter: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: HOME_URL,
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("@/layouts/index.vue"),
    redirect: HOME_URL,
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          icon: "HomeFilled",
          title: "首页",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: true,
          isKeepAlive: true,
        },
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "/chart",
        name: "chart",
        meta: {
          icon: "chart",
          title: "图表",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true,
        },
        component: () => import("@/views/chart/index.vue"),
      },
    ],
  },
];

/**
 * errorRouter(错误页面路由)
 */
export const errorRouter = [
  {
    path: "/404",
    name: "404",
    component: () => import("@/components/error-message/404.vue"),
    meta: {
      title: "404页面",
    },
  },
  // Resolve refresh page, route warnings
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/components/error-message/404.vue"),
  },
];
