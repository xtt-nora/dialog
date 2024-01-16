import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import { staticRouter, errorRouter } from "@/router/modules/staticRouter";

// 路由模式，可通过.env动态配置
const mode = "history";

const routerMode = {
  hash: () => createWebHashHistory(),
  history: () => createWebHistory(),
};

/**
 * @description 路由参数配置简介
 * @param path ==> 路由菜单访问路径
 * @param name ==> 路由 name (对应页面组件 name，可用作 KeepAlive 缓存标识 && 按钮筛选权限)
 * @param redirect ==> 重定向路由地址
 * @param component ==> 视图文件路径
 * @param meta ==> 路由菜单元信息
 * @param meta.icon ==> 菜单和面包屑对应的图标
 * @param meta.title ==> 路由标题(用作 document.title || 菜单的名称)
 * @param meta.activeMenu ==> 档期啊你路由为详情页时，需要高亮的菜单
 * @param meta.isLink ==> 路由外链时填写的访问地址
 * @param meta.isHide ==> 是否在菜单中隐藏(通常列表详情页需要隐藏)
 * @param meta.isFull ==> 菜单是否全屏
 * @param meta.isAffix ==> 菜单是否固定在标签页中 (首页通常是固定项)
 * @param meta.isKeepAlive ==> 当前路由是否缓存
 */
const router = createRouter({
  history: routerMode[mode](),
  routes: [...staticRouter, ...errorRouter],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * @description 路由拦截器
 */
router.beforeEach(async (to, from, next) => {
  // 动态设置标题
  const title = import.meta.env.VITE_GLOB_APP_TITLE
  document.title = to.meta.title ? `${to.meta.title} - ${title}` : title
  next();
});

export default router;
