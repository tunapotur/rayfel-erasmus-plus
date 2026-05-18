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
  bg?: string;
  link: ArrowLinkType;
}

export default function SectionTemplate({
  children,
  name,
  header,
  bg,
  link,
}: SectionProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(link.href);

  return (
    <section
      className={`flex flex-col gap-6 px-4 py-6 rounded-md ${bg ? bg : ""}`}
    >
      <div className="flex flex-row justify-between items-center">
        <SectionName text={name} />
        {!isActive && <ArrowLink link={link} />}
      </div>

      <SectionHeader text={header} />
      {children}
    </section>
  );
}
