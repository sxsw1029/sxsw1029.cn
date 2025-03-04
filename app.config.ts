export default defineAppConfig({
  siteConfig: {
    title: "Sxsw的技术宅学习日志",

    navs: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Posts",
        link: "/posts",
      },
    ],

    homePageTitle: "",

    postsPageTitle: "All Posts",

    license: {
      name: "CC BY-NC-SA 4.0",
      link: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    },

    footer: {
      hideLicense: false,
    },

    icpBeian: {
      text: "苏ICP备2023030123号-1",
      url: "https://beian.miit.gov.cn/",
    },

    gongAnBeian: {
      text: "苏公网安备 32058502010769号",
      url: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode%253D32058502010769",
    },
  },

  userConfig: {
    avatar: "https://gravatar.loli.net/avatar/2243c217602059ec1739885977df96e7?s=200?d=mp?f=y",

    description: "Hi there, I'm a beginner programmer and currently learning Computer Science.",

    userName: "sxsw1029",

    location: "Jiangsu, China",

    email: "sxsw1029@qq.com",

    socials: [
      {
        icon: "i-ri:github-line",
        link: "https://github.com/sxsw1029",
      },
      {
        icon: "i-ri:weibo-line",
        link: "https://weibo.com/805961465",
      },
      {
        icon: "i-ri:bilibili-line",
        link: "https://space.bilibili.com/4393091",
      },
    ],
  },
});
