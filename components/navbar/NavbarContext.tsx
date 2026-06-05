"use client";

import { createContext, useContext, useState } from "react";

interface NavbarActionContextType {
  isMobilMenuOpen: boolean;
  setMobilMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarActionContext = createContext<
  NavbarActionContextType | undefined
>(undefined);

export function NavbarActionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobilMenuOpen, setMobilMenuOpen] = useState(false);

  return (
    <NavbarActionContext.Provider value={{ isMobilMenuOpen, setMobilMenuOpen }}>
      {children}
    </NavbarActionContext.Provider>
  );
}

export function useNavbarAction(): NavbarActionContextType {
  const context = useContext(NavbarActionContext);
  if (context === undefined)
    throw new Error(
      "NavbarActionContext was used outside of NavbarActionProvider",
    );
  return context;
}
