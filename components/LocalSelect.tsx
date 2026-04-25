"use client";

import { usePathname, useRouter } from "next/navigation";
import { type Locale } from "@/i18n-config";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SiteHeaderProps {
  locale: Locale;
}

export default function LocaleSelect({ locale }: SiteHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocalePath = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split("/");
    if (segments.length > 1) segments[1] = targetLocale;
    return segments.join("/") || `/${targetLocale}`;
  };

  const handleLocaleChange = (value: string) => {
    const target = value as Locale;
    router.push(switchLocalePath(target));
  };

  return (
    <div>
      <Select defaultValue={locale} onValueChange={handleLocaleChange}>
        <SelectTrigger className="w-20">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="en">EN</SelectItem>
            <SelectItem value="de">DE</SelectItem>
            <SelectItem value="tr">TR</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
