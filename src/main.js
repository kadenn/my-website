import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import routes from "~pages";
import "./style.css";

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, { routes }, ({ router, isClient }) => {
  if (isClient) {
    // Scroll to top on route change
    router.beforeEach(() => {
      window.scrollTo(0, 0);
    });
  }
});
