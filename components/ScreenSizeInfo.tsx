"use client";

import { useScreenBreakpoints } from "./providers/screen-breakpoints-provider";
import useWindowSize from "@/lib/useWindowSize";

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

  const size = useWindowSize();

  return (
    <div>
      <div className="p-4 text-lg font-semibold">{`${label} Ekran şu anda ${info} boyutunda`}</div>
      <div className="p-4 text-lg font-semibold text-red-700">
        {size.width}px / {size.height}px
      </div>
    </div>
  );
}

export default ScreenSizeInfo;
