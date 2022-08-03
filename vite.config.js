import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-ssg-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Pages()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
    onFinished() {
      generateSitemap({ exclude: ["/admin"] });
    },
  },
});
