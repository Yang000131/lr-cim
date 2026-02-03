import { defineConfig } from "vitepress";
import { MermaidMarkdown, MermaidPlugin } from "vitepress-plugin-mermaid";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import { nav, sidebarMES, searchOptions } from "./theme/config";
import vitepressProtectPlugin from "vitepress-protect-plugin";

export default defineConfig({
  title: "LR-CIM",
  lang: "zh-CN",
  description: "计算机集成制造文档",
  head: [["link", { rel: "icon", href: "/lr-cim-logo-3.svg" }]],
  themeConfig: {
    logo: { src: "/lr-cim-logo-3.svg", width: 32, height: 32, alt: "lr-cim" },
    search: {
      provider: "local",
      options: searchOptions,
    },
    nav,
    socialLinks: [
      { icon: "github", link: "https://github.com/Yang000131" },
      { icon: "gitee", link: "https://gitee.com/yang_311414/lr-408" },
      { icon: "bilibili", link: "https://space.bilibili.com/516750485" },
    ],
    sidebar: {
      "/mes/": { base: "/mes/", items: sidebarMES },
    },
    outline: {
      level: [2, 4],
      label: "页面导航",
    },
    editLink: {
      pattern: "https://gitee.com/yang_311414/lr-408/blob/doc/docs/:path",
      text: "在Gitee编辑本页",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    footer: {
      message: "由一可爱小白兔支持",
      copyright: `Copyright © 2021-${new Date().getFullYear()} LR-Software.`,
    },
    notFound: {
      title: "页面未找到",
      quote:
        "但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。",
      linkLabel: "前往首页",
      linkText: "带我回首页",
    },
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    skipToContentLabel: "跳转到内容",
  },
  cleanUrls: true,
  vite: {
    plugins: [
      MermaidPlugin(),
      groupIconVitePlugin(),
      vitepressProtectPlugin({
        disableF12: true,
        disableCopy: true,
        disableSelect: true,
      }),
    ],
    optimizeDeps: {
      include: ["mermaid"],
    },
    ssr: {
      noExternal: ["mermaid"],
    },
    build: {
      chunkSizeWarningLimit: 1000,
    },
  },
  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    codeCopyButtonTitle: "复制代码",
    config: (md) => {
      md.use(MermaidMarkdown);
      md.use(groupIconMdPlugin);
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === "h1") htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      };
    },
  },
});
