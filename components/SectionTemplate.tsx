import { ReactNode } from "react";
import SectionHeader from "./SectionHeader";
import SectionName from "./SectionName";
import Link from "next/link";

interface SectionProps {
  children: ReactNode;
  name: string;
  header: string;
  href: string;
}

export default function SectionTemplate({
  children,
  name,
  header,
}: SectionProps) {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <SectionName text={name} />
        {/* <Link /> */}
      </div>

      <SectionHeader text={header} />
      {children}
    </section>
  );
}
