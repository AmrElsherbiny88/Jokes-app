import { browser } from "$app/environment";
export const theme = {
  // @ts-ignore
  setTheme(value) {
    if (browser) {
      document.body.setAttribute("data-theme", value);
      //document.cookie = `theme=${value}`;
      localStorage.setItem("theme", value);
    }
  },
};
