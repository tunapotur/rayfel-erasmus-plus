import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";

export default function ArrowLink({
  text,
  href,
  isArrowLeft,
}: {
  text: string;
  href: string;
  isArrowLeft?: boolean;
}) {
  return (
    <Link
      href={href}
      className="text-primary hover:text-primary/75 mt-auto flex items-center gap-1.5 text-sm font-medium transition-colors"
    >
      {isArrowLeft && <ArrowLeft size={14} />}
      <span>{text}</span>
      {!isArrowLeft && <ArrowRight size={14} />}
    </Link>
  );
}
