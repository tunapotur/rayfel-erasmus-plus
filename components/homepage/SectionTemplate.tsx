"use client";

import { ReactNode } from "react";
import SectionHeader from "./SectionHeader";
import SectionName from "./SectionName";
import ArrowLink, { ArrowLinkType } from "../ArrowLink";
import { usePathname } from "@/src/i18n/navigation";

interface SectionProps {
  children: ReactNode;
  name: string;
  header: string;
  link: ArrowLinkType;
}

export default function SectionTemplate({
  children,
  name,
  header,
  link,
}: SectionProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(link.href);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-row justify-between items-center">
        <SectionName text={name} />
        {!isActive && <ArrowLink link={link} />}
      </div>

      <SectionHeader text={header} />
      {children}
    </section>
  );
}
