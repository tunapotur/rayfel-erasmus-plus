"use client";

import { ReactNode } from "react";
import ArrowLink, { ArrowLinkType } from "../ArrowLink";
import { usePathname } from "@/src/i18n/navigation";

interface SectionProps {
  children: ReactNode;
  name: string;
  header: string;
  hasBackground?: boolean;
  link: ArrowLinkType;
}

function SectionName({ text }: { text: string }) {
  return (
    <h2 className="text-primary text-base font-bold uppercase tracking-widest">
      {text}
    </h2>
  );
}

function SectionHeader({ text }: { text: string }) {
  return (
    <h3 className="text-3xl font-bold leading-tight text-gray-800 dark:text-gray-200 ">
      {text}
    </h3>
  );
}

export default function SectionTemplate({
  children,
  name,
  header,
  hasBackground,
  link,
}: SectionProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(link.href);

  return (
    <section
      className={`flex flex-col gap-6 px-4 py-6 lg:rounded-md ${hasBackground ? "bg-background-gray" : ""}`}
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
