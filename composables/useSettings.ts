export function useSettings() {
  return useAsyncData("settings", () => queryContent("/settings").findOne());
}
