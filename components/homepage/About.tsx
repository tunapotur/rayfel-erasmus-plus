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
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-0">
        {/* Content */}
        <div className="order-last flex flex-col gap-4 md:order-first md:w-2/3 md:pr-6">
          {/* Explanation - 2 paragraph */}
          <p className="text-muted-foreground text-base leading-relaxed">
            {about_section.description}
          </p>

          {/* List */}
          <ul className="flex flex-col gap-3">
            {about_section.highlights.map((item, index) => (
              <li
                key={index}
                className="text-muted-foreground flex items-start gap-3 text-sm"
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
          width={320}
          height={240}
          className="order-first rounded-2xl shadow-xl md:order-last"
          style={{ width: "24rem", height: "auto", objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 384px"
        />
      </div>
    </SectionTemplate>
  );
}
