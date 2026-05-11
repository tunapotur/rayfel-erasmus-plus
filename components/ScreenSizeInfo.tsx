"use client";

import { useScreenBreakpoints } from "./providers/screen-breakpoints-provider";

function ScreenSizeInfo() {
  const { isSmScreen, isMdScreen, isLgScreen, isXlScreen, isXl2Screen } =
    useScreenBreakpoints();

  const getScreenSize = () => {
    if (isXl2Screen) return { label: "2XL", info: "1536px ve üzeri" };
    if (isXlScreen) return { label: "XL", info: "1280px – 1535px" };
    if (isLgScreen) return { label: "LG", info: "1024px – 1279px" };
    if (isMdScreen) return { label: "MD", info: "768px – 1023px" };
    if (isSmScreen) return { label: "SM", info: "640px – 767px" };
    return { label: "XS", info: "640px'den küçük" };
  };

  const { label, info } = getScreenSize();

  return <div>{`${label} Ekran şu anda ${info} boyutunda`}</div>;
}

export default ScreenSizeInfo;
