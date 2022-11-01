import { defineConfig } from "vitepress";

const Guide = [{ text: "Get Started", link: "/guide/" }];

const CoreCategories = [
  { text: "createElDialog", link: "/core/createElDialog/" },
  { text: "useFoundationForm", link: "/core/useFoundationForm/" },
  { text: "OptionList", link: "/core/option-list/" },
];

const DefaultSideBar = [
  { text: "Guide", items: Guide },
  { text: "Core", items: CoreCategories },
];

export default defineConfig({
  title: "element plus toolkit",
  description: "基于Element Plus的工具集",

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
