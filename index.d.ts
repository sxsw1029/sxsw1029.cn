declare module "nuxt/schema" {
  interface AppConfig {
    siteConfig: {
      title?: string;

      navs?: {
        name: string;
        link: string;
      }[];

      homePageTitle?: string;

      postsPageTitle?: string;

      license?: {
        name: string;
        link: string;
      };

      footer?: {
        hideLicense?: boolean;
      };

      icpBeian?: {
        text: string;
        url: string;
      };

      gongAnBeian?: {
        text: string;
        url: string;
      };
    };

    userConfig: {
      avatar?: string;

      description?: string;

      userName?: string;

      location?: string;

      email?: string;

      socials?: {
        icon: string;
        link: string;
      }[];
    };
  }
}
