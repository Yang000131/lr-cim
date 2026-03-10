import { DefaultTheme } from "vitepress";

export const sidebarReport: DefaultTheme.SidebarItem[] = [
  {
    text: "Report",
    items: [
      {
        text: "运输设备分类",
        link: "transport-equipment-category",
      },
      {
        text: "附录",
        collapsed: false,
        items: [
          {
            text: "名次对照表",
            link: "名词对照表",
          },
        ],
      },
    ],
  },
];
