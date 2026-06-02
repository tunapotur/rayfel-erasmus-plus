// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.
"use client";

import { Link, useRouter } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const t = useTranslations("NotFoundPage");
  const router = useRouter();

  return (
    <main className="bg-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Glowing orb behind 404 */}
      <div
        aria-hidden="true"
        className="bg-primary/10 pointer-events-none absolute top-1/2 left-1/2 size-120 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* 404 number */}
        <p
          className="text-foreground/[0.07] font-mono text-[clamp(7rem,20vw,14rem)] leading-none font-black tracking-tighter select-none"
          aria-hidden="true"
        >
          404
        </p>

        {/* Icon + headline stacked over the number */}
        <div className="-mt-[clamp(4rem,12vw,8rem)] flex flex-col items-center gap-4">
          {/* Broken-link icon */}
          <span
            className="border-border bg-muted text-muted-foreground flex h-14 w-14 items-center justify-center rounded-2xl border shadow-sm"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              <line x1="2" y1="2" x2="22" y2="22" />
            </svg>
          </span>

          <div className="flex flex-col items-center gap-2">
            <h1 className="text-foreground text-2xl font-semibold tracking-tight">
              {t("header")}
            </h1>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              {t("text")}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button asChild>
            <Link href="/">{t("btnGoHome")}</Link>
          </Button>
          <Button variant="outline" onClick={() => router.back()}>
            {t("btnGoBack")}
          </Button>
        </div>
      </div>
    </main>
  );
}
