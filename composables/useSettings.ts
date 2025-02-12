import type { SiteConfig, UserConfig } from "~/configs/types";
import config from "~/configs/settings";

export function useSiteSettings(): SiteConfig | undefined {
  return config.siteConfig;
}

export function useUserSettings(): UserConfig | undefined {
  return config.userConfig;
}
