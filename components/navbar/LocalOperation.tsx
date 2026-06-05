import { useLocale, useTranslations } from "next-intl";

import { routing } from "@/src/i18n/routing";

import { SelectItem } from "@/components/ui/select";

import LocalSelect from "./LocalSelect";

export default function LocalOperation() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocalSelect defaultValue={locale} label={t("label")}>
      {routing.locales.map((cur) => (
        <SelectItem key={cur} value={cur}>
          {cur}
        </SelectItem>
      ))}
    </LocalSelect>
  );
}
