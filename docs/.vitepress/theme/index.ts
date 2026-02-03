// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch, nextTick } from "vue";
import { Theme, inBrowser, useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import busuanzi from "busuanzi.pure.js";
import ArticleMetadata from "./component/ArticleMetadata.vue";
import "./style/index.css";
import "virtual:group-icons.css";
import Notice from "./component/Notice.vue";

let homePageStyle: HTMLStyleElement | undefined;

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "layout-top": () => h(Notice),
    });
  },
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      router.onAfterRouteChange = () => {
        busuanzi.fetch();
      };
    }
    // 彩虹色卡
    if (typeof window !== "undefined") {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === "/"),
        { immediate: true },
      );
    }
    app.component("ArticleMetadata", ArticleMetadata);
  },
} satisfies Theme;

function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return;
    homePageStyle = document.createElement("style");
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`;
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle) return;
    homePageStyle.remove();
    homePageStyle = undefined;
  }
}
