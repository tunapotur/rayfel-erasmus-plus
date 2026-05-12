"use client";

import { createContext, useContext } from "react";
import useWindowSize from "@/lib/useWindowSize";

// Tailwindcss breakpoints
const tailwindBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xl2: 1536,
} as const;

interface ScreenBreakpointsContextType {
  isSmScreen: boolean;
  isMdScreen: boolean;
  isLgScreen: boolean;
  isXlScreen: boolean;
  isXl2Screen: boolean;
}

interface ScreenBreakpointsProviderProps {
  children: React.ReactNode;
}

const ScreenBreakpointsContext = createContext<
  ScreenBreakpointsContextType | undefined
>(undefined);

function useBreakpoint(minWidth: number): boolean {
  const windowSize = useWindowSize();
  const width = windowSize.width ?? 0;

  return width >= minWidth;
}

function ScreenBreakpointsProvider({
  children,
}: ScreenBreakpointsProviderProps) {
  const isSmScreen = useBreakpoint(tailwindBreakpoints.sm);
  const isMdScreen = useBreakpoint(tailwindBreakpoints.md);
  const isLgScreen = useBreakpoint(tailwindBreakpoints.lg);
  const isXlScreen = useBreakpoint(tailwindBreakpoints.xl);
  const isXl2Screen = useBreakpoint(tailwindBreakpoints.xl2);

  return (
    <ScreenBreakpointsContext.Provider
      value={{ isSmScreen, isMdScreen, isLgScreen, isXlScreen, isXl2Screen }}
    >
      {children}
    </ScreenBreakpointsContext.Provider>
  );
}

function useScreenBreakpoints(): ScreenBreakpointsContextType {
  const context = useContext(ScreenBreakpointsContext);
  if (context === undefined)
    throw new Error(
      "ScreenBreakpointsContext was used outside of ScreenBreakpointsProvider",
    );
  return context;
}

export { ScreenBreakpointsProvider, useScreenBreakpoints, tailwindBreakpoints };
