export interface Config {
  siteConfig?: SiteConfig;
  userConfig?: UserConfig;
}

export interface SiteConfig {
  title?: string;

  navs?: NavItems[];

  license?: string | License;

  footer?: Footer;

  icpBeian?: Beian;

  gongAnBeian?: Beian;
}

export interface UserConfig {
  avatar?: string;

  description?: string;

  userName?: string;

  location?: string;

  email?: string;

  socials?: SocialItems[];
}

export interface NavItems {
  name: string;
  link: string;
}

export interface License {
  name: string;
  link: string;
}

export interface Footer {
  hideLicense?: boolean;
}

export interface SocialItems {
  icon: string;
  link: string;
}

export interface BeianInfo {
  text: string;
  url: string;
}
