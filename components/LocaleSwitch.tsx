import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/src/i18n/routing";
import LocalSelect from "./LocaleSwitcher";

import { SelectItem } from "@/components/ui/select";

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
