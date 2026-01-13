import { DefaultTheme } from "vitepress";

export const sidebarMES: DefaultTheme.SidebarItem[] = [
  {
    text: "MES",
    items: [
      {
        text: "附录",
        collapsed: false,
        items: [
          {
            text: "名次对照表",
            link: "名词对照表",
          }
        ]
      }
    ]
  }
];
