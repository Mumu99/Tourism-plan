import DefaultTheme from "vitepress/theme";
import myLayout from "../components/myLayout.vue";
import "./custom.less";
import "./rainbow.css";
import "./vars.css";

export default {
  ...DefaultTheme,
  Layout: myLayout,
  enhanceApp({ app }) {
    // app is the Vue 3 app instance from `createApp()`.
    // ...
  },
  NotFound: () => "404",
};
