"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function LocalSelect() {
  const [lang, setLang] = useState("tr");

  return (
    <Select value={lang} onValueChange={setLang}>
      <SelectTrigger className="max-w-48">
        <SelectValue placeholder="Select your language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value="tr">TR</SelectItem>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="de">DE</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
