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
    // 🚀 Dinamik Rotalar (Köşe parantez yapıları)
    "/news/detail/[slug]": "/news/detail/[slug]",
    "/announcements/detail/[slug]": "/announcements/detail/[slug]",
    // Sayfalama (Pagination: /announcements/1, /announcements/2 vb.) için:
    "/announcements/[page]": "/announcements/[page]",
    "/news/[page]": "/news/[page]",

    "/pathnames": {
      de: "/pfadnamen",
    },
  },
  localePrefix: "always",
});
