"use client";

import { ReactNode } from "react";
import ArrowLink from "../ArrowLink";
import { usePathname } from "@/src/i18n/navigation";
import HomeSectionWrapper from "./HomeSectionWrapper";

interface SectionProps {
  children: ReactNode;
  name: string;
  header: string;
  linkText: string;
  href: string;
  hasBackground?: boolean;
}

function SectionName({ text }: { text: string }) {
  return (
    <h2 className="text-primary text-base font-bold tracking-widest uppercase">
      {text}
    </h2>
  );
}

function SectionHeader({ text }: { text: string }) {
  return (
    <h3 className="text-3xl leading-tight font-bold text-gray-800 dark:text-gray-200">
      {text}
    </h3>
  );
}

export default function HomeSectionTemplate({
  children,
  name,
  header,
  href,
  linkText,
  hasBackground,
}: SectionProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <HomeSectionWrapper hasBackground={hasBackground}>
      <div className="flex flex-row items-center justify-between">
        <SectionName text={name} />
        {!isActive && <ArrowLink text={linkText} href={href} />}
      </div>

      <SectionHeader text={header} />
      {children}
    </HomeSectionWrapper>
  );
}
