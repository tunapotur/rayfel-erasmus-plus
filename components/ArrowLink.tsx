import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ArrowLinkType {
  text: string;
  href: string;
}

export default function ArrowLink({ link }: { link: ArrowLinkType }) {
  return (
    <Link
      href={link.href}
      className="flex items-center gap-1.5 text-primary hover:text-primary/75 text-sm font-medium transition-colors mt-auto"
    >
      <span>{link.text}</span>
      <ArrowRight size={14} />
    </Link>
  );
}
