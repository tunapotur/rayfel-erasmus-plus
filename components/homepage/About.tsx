"use client";

import about from "@/public/about.png";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import SectionTemplate from "./SectionTemplate";
import about_section from "@/sample_data/about_section";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("AboutSection");

  return (
    <SectionTemplate
      name={t("name")}
      header={t("header")}
      linkText={t("linkText")}
      href="/about"
      hasBackground
    >
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
        {/* Content */}
        <div className="order-last md:order-first md:w-2/3 flex flex-col gap-4 md:pr-6">
          {/* Explanation - 2 paragraph */}
          <p className="text-muted-foreground text-base leading-relaxed">
            {about_section.description}
          </p>

          {/* List */}
          <ul className="flex flex-col gap-3">
            {about_section.highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-muted-foreground text-sm"
              >
                <CheckCircle2
                  className="text-primary mt-0.5 shrink-0"
                  size={18}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <Image
          src={about}
          alt={t("imageAltText")}
          // fill
          loading="eager"
          className="orter-first md:order-last md:w-1/3 object-contain object-center rounded-2xl shadow-xl"
          sizes="100vw"
        />
      </div>
    </SectionTemplate>
  );
}
