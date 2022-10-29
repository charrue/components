import { join } from "path";
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { mdPlugin } from "./.vitepress/plugins/md";

export default defineConfig({
  resolve: {
    alias: {
      "@charrue/ep": join(__dirname, "core/index.ts"),
    },
  },
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    mdPlugin(),
  ],
});
