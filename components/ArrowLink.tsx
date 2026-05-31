import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ArrowLink({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="text-primary hover:text-primary/75 mt-auto flex items-center gap-1.5 text-sm font-medium transition-colors"
    >
      <span>{text}</span>
      <ArrowRight size={14} />
    </Link>
  );
}
