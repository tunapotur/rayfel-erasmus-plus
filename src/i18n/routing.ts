import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de", "tr"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/about": "/about",
    "/announcements": "/announcements",
    "/news": "/news",
    "/login": "/login",
    "/signup": "/signup",
    "/pathnames": {
      de: "/pfadnamen",
    },
  },
  localePrefix: "always",
});
