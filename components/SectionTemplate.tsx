import { ReactNode } from "react";
import SectionHeader from "./SectionHeader";
import SectionName from "./SectionName";

interface SectionProps {
  children: ReactNode;
  name: string;
  header: string;
}

export default function SectionTemplate({
  children,
  name,
  header,
}: SectionProps) {
  return (
    <section className="flex flex-col gap-6">
      <SectionName text={name} />
      <SectionHeader text={header} />
      {children}
    </section>
  );
}
