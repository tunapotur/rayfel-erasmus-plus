import { ReactNode } from "react";

export default function SectionWrapper({
  children,
  hasBackground,
}: {
  children: ReactNode;
  hasBackground?: boolean;
}) {
  return (
    <section
      className={`flex flex-col gap-6 px-4 py-6 lg:rounded-md ${hasBackground ? "bg-background-gray" : ""}`}
    >
      {children}
    </section>
  );
}
