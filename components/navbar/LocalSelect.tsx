"use client";

import { ReactNode, useTransition } from "react";
import { useParams } from "next/navigation";
import { Locale } from "next-intl";

import { usePathname, useRouter } from "@/src/i18n/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocalSelect({ children, defaultValue, label }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(value: string) {
    const nextLocale = value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger className="bg-background max-w-48">
        <SelectValue>{defaultValue}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {children}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
