"use client";

import Image from "next/image";
import Link from "next/link";
// 1. Lucide ikonlarının tamamını Icons takma adıyla import ediyoruz
import { icons } from "lucide-react";
import logo from "@/public/logo_rayfel.png";
import footer_data from "@/sample_data_tr/footer";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-background-gray mt-18">
      {/* Main Footer */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Logo & Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Rayfel Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-bold text-base text-foreground">
                {t("rayfelProjectsHeader")}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("rayfelProjectsContent")}
            </p>
          </div>

          {/* Col 2 — Hızlı Erişim */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-foreground">
              {t("quickLinks")}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footer_data.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-primary text-muted-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Kurumlar */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-foreground">
              {t("institutions")}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footer_data.institutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Bizi Takip Edin */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-foreground">
              {t("followUs")}
            </h4>
            <div className="flex items-center gap-2">
              {footer_data.socialLinks.map(({ iconName, href, label }) => {
                // Tipi en başta kısıtladığımız için TypeScript burada hata vermez, tamamen güvenli kabul eder.
                const IconComponent = icons[iconName];

                return (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 text-muted-foreground hover:text-primary hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                  >
                    {IconComponent ? <IconComponent size={16} /> : null}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-800" />

      {/* Bottom Bar */}
      <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-muted-foreground text-sm">{t("copyRight")}</p>
        <p className="text-muted-foreground text-xs tracking-widest uppercase">
          {t("rayfelHighSchool")}
        </p>
      </div>
    </footer>
  );
}
