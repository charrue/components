import { defineConfig } from "vitepress";

const Guide = [{ text: "Get Started", link: "/guide/" }];

const CoreCategories = [
  { text: "createElDialog", link: "/ep/createElDialog/" },
  { text: "useFoundationForm", link: "/ep/useFoundationForm/" },
  { text: "OptionList", link: "/ep/option-list/" },
];

const DefaultSideBar = [
  { text: "Guide", items: Guide },
  { text: "ElementPlus", items: CoreCategories },
];

export default defineConfig({
  title: "charrue components",
  description: "组件集",

  head: [
    ["link", { rel: "stylesheet", href: "//unpkg.com/element-plus/dist/index.css" }]
  ],

  themeConfig: {
    logo: "/logo.svg",

    nav: [
      {
        text: "Guide",
        items: [{ text: "Guide", link: "/guide/" }],
      },
    ],
    sidebar: {
      "/guide/": DefaultSideBar,
    },
  },
});
