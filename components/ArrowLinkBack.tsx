"use client";

import { useRouter } from "@/src/i18n/navigation";
import { ArrowLeft } from "lucide-react";

export default function ArrowLink() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="text-primary hover:text-primary/75 mt-auto flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors"
    >
      <ArrowLeft size={14} />
      <span>{"Geri Dön"}</span>
    </div>
  );
}
