import { ConfigEnv, UserConfig, defineConfig, loadEnv } from "vite";
import { createVitePlugins } from "./build/plugins";
import { wrapperEnv } from "./build/getEnv";
import { createProxy } from "./build/proxy";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);

  return {
    base: viteEnv.VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
      },
    },
    server: {
      host: "0.0.0.0",
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      proxy: createProxy(viteEnv.VITE_PROXY),
    },
    plugins: createVitePlugins(viteEnv),
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import './src/styles/variable.scss';`, // 替换为你的变量文件实际路径
        },
      },
    },
  };
});
