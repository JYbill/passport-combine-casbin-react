import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import tsconfigPaths from "vite-tsconfig-paths";
import mkcert from "vite-plugin-mkcert";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  const config: UserConfig = {
    server: {
      https: true,
    },
    plugins: [
      react(),
      tsconfigPaths(),
      legacy(),
      mkcert({
        source: "coding",
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react"],
            "react-dom": ["react-dom"],
          },
        },
      },
    },

    // 别名
    resolve: {
      alias: {
        "@": resolve("./src"),
        images: resolve("./src/assets/images"),
        scss: resolve("./src/assets/scss"),
      },
    },

    // style预处理
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "scss/variable.scss";', // 添加公共样式
        },
      },
    },
  };
  return config;
});
