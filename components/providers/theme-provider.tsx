"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: "class" | "data-theme" | "data-mode";
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({ theme: "system", setTheme: () => {} });

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    const resolved: "light" | "dark" =
      theme === "system" && enableSystem
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme === "system"
          ? "light"
          : theme;

    if (disableTransitionOnChange) {
      root.classList.add("[&_*]:!transition-none");
      setTimeout(() => root.classList.remove("[&_*]:!transition-none"), 0);
    }

    if (attribute === "class") {
      root.classList.remove("light", "dark");
      root.classList.add(resolved);
    } else {
      root.setAttribute(attribute, resolved);
    }

    localStorage.setItem("theme", theme);
  }, [theme, enableSystem, disableTransitionOnChange, attribute]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
