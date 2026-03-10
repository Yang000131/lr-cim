import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  { text: "HomePage", link: "/" },
  { text: "MES", link: "/mes" },
  {
    text: "SubSystem",
    items: [
      { text: "PMS", link: "/subsystem/pms" },
      { text: "PRMS", link: "/subsystem/prms" },
      { text: "FMB", link: "/subsystem/fmb" },
    ],
  },
  { text: "Report", link: "/report" },
];
