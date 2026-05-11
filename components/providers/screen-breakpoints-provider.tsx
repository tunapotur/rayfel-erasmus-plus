"use client";

import { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

// Tailwindcss breakpoints
const tailwindBreakpoints = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  xl2: "(min-width: 1536px)",
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

function ScreenBreakpointsProvider({ children }: ScreenBreakpointsProviderProps) {
  const isSmScreen = useMediaQuery({ query: tailwindBreakpoints.sm });
  const isMdScreen = useMediaQuery({ query: tailwindBreakpoints.md });
  const isLgScreen = useMediaQuery({ query: tailwindBreakpoints.lg });
  const isXlScreen = useMediaQuery({ query: tailwindBreakpoints.xl });
  const isXl2Screen = useMediaQuery({ query: tailwindBreakpoints.xl2 });

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
