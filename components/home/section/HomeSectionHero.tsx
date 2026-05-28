"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroPic from "@/public/hero_pic.jpg";
import { Button } from "../../ui/button";
import { useTranslations } from "next-intl";

export default function HomeSectionHero() {
  const t = useTranslations("HeroSection");
  const sectionSize = "h-72 w-full sm:h-96 md:h-120 lg:h-144";

  return (
    <section
      className={`relative z-15 flex flex-col items-center ${sectionSize}`}
    >
      {/* Hero Image */}
      <div className="relative z-5 size-full overflow-hidden">
        {/* Image */}
        <div className="absolute inset-0">
          <div className={`relative ${sectionSize}`}>
            <Image
              src={HeroPic}
              alt={t("imageAltText")}
              fill
              className="rounded-b-xl object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              loading="eager"
              preload
            />
          </div>

          {/* Gradient overlay*/}
          <div className="absolute inset-0 z-3 bg-linear-to-r from-black/75 via-black/50 to-black/20" />
        </div>

        {/* Content */}
        <div className="absolute z-10 flex h-full w-full flex-col gap-3 p-8 max-[400px]:p-4 sm:w-[90%] sm:max-w-160 sm:gap-8 sm:pt-18 sm:pl-9 md:pt-18 md:pl-12">
          <h1 className="text-bright-header text-xl leading-tight font-bold drop-shadow-sm sm:text-2xl md:text-3xl lg:text-5xl">
            {t("header")}
          </h1>

          <p className="text-bright-header w-full text-sm leading-relaxed sm:w-[75%] md:text-base lg:text-lg">
            {t("content")}
          </p>

          <Button
            asChild
            className="w-fit p-4 text-xs font-semibold md:p-6 md:text-base"
          >
            <Link href="/about">
              <span>{t("linkText")}</span>
              <ArrowRight size={24} />
            </Link>
          </Button>
        </div>

        {/* Bottom effect */}
        <div className="absolute right-0 bottom-0 left-0 z-4 h-16 bg-linear-to-t from-white to-transparent" />
      </div>
    </section>
  );
}
