import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Tourism-plan/",
  title: "tourism-plan", // 标题
  description: "tourism-plan",
  themeConfig: {
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "旅游城市",
        items: [
          { text: "杭州", link: "/views/Hangzhou/" },
          { text: "南京", link: "/views/Nanjing/" },
          { text: "厦门", link: "/views/Xiamen/" },
          { text: "上饶", link: "/views/Shangrao/" },
          { text: "武汉", link: "/views/Wuhan/" },
          { text: "长沙", link: "/views/Changsha/" },
          { text: "重庆", link: "/views/Chongqing/" },
          { text: "南昌", link: "/views/Nanchang/" },
        ],
      },
      {
        text: "登机指南",
        link: "/views/BoardingGuide/",
      },
    ],

    sidebar: [
      {
        text: "旅游城市",
        collapsed: false,
        items: [
          { text: "杭州", link: "/views/Hangzhou/" },
          { text: "南京", link: "/views/Nanjing/" },
          { text: "厦门", link: "/views/Xiamen/" },
          { text: "上饶", link: "/views/Shangrao/" },
          { text: "武汉", link: "/views/Wuhan/" },
          { text: "长沙", link: "/views/Changsha/" },
          { text: "重庆", link: "/views/Chongqing/" },
          { text: "南昌", link: "/views/Nanchang/" },
        ],
      },
      {
        text: "乘机指南（国内）",
        items: [{ text: "登机指南", link: "/views/BoardingGuide/" }],
      },
    ],
    footer: {
      message: "山海自有归期 风雨自有相逢.",
      copyright: "意难平终将和解 万事终将顺意",
    },
    search: {
      provider: "local",
    },
    outline: {
      level: [2, 6],
      label: "目录",
    },
  },
  lastUpdated: true,
  head: [["script", { src: "/Valine.min.js" }]],
});
