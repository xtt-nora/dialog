import { resolve } from "path";
import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { createHtmlPlugin } from "vite-plugin-html";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

/**
 * 创建 vite 插件
 * @param viteEnv
 */
export const createVitePlugins = (
  viteEnv: ViteEnv
): (PluginOption | PluginOption[])[] => {
  const { VITE_GLOB_APP_TITLE } = viteEnv;
  return [
    vue(),
    AutoImport({
      imports: [
        "vue",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
        },
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
    createHtmlPlugin({
      inject: {
        data: {
          title: VITE_GLOB_APP_TITLE,
        },
      },
    }),
    // 使用 svg 图标
    createSvgIconsPlugin({
      // 指定 SVG图标 保存的文件夹路径
      iconDirs: [resolve(process.cwd(), "src/assets/iconfont")],
      // 指定 使用svg图标的格式
      symbolId: "icon-[dir]-[name]",
    }),
  ];
};
