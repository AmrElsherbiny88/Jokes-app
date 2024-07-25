import { browser } from "$app/environment";
export const theme = {
  // @ts-ignore
  setTheme(value) {
    if (browser) {
      window.localStorage.setItem("theme", value);
    }
  },
  getTheme() {
    return browser
      ? window.localStorage.getItem("theme") ?? null
      : "skeleton" || "gold-nouveau" || "modern" || "crimson";
  },
};
