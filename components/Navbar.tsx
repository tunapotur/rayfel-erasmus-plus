"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import logo from "@/public/logo64.png";
import LocalOperation from "@/components/LocaleSwitch";
import { useTranslations } from "next-intl";
import { usePathname } from "@/src/i18n/navigation";
// import { useScreenBreakpoints } from "./providers/screen-breakpoints-provider";
import { useScreenBreakpoints } from "./providers/screen-breakpoints-provider";
import { createContext, useContext, useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarActionProviderProps {
  children: React.ReactNode;
}

interface NavbarActionContextType {
  isMobilMenuOpen: boolean;
  setMobilMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarActionContext = createContext<NavbarActionContextType | undefined>(
  undefined,
);

function NavbarActionProvider({ children }: NavbarActionProviderProps) {
  const [isMobilMenuOpen, setMobilMenuOpen] = useState(false);

  return (
    <NavbarActionContext.Provider value={{ isMobilMenuOpen, setMobilMenuOpen }}>
      {children}
    </NavbarActionContext.Provider>
  );
}

function useNavbarAction(): NavbarActionContextType {
  const context = useContext(NavbarActionContext);
  if (context === undefined)
    throw new Error(
      "NavbarActionContext was used outside of NavbarActionProvider",
    );
  return context;
}

// export { NavbarActionProvider, useNavbarAction };

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 shrink-0">
      {/* image */}
      <div className="size-3.5 sm:size-7.5 flex items-center justify-center">
        <Image src={logo} alt="Rayfel Logo" />
      </div>

      {/* text */}
      <div className="font-semibold flex sm:gap-0 gap-1 sm:flex-col items-start leading-tight">
        <div>Rayfel</div>
        <div className="text-primary font-bold dark:text-blue-700">
          Erasmus+
        </div>
      </div>
    </Link>
  );
}

function Navigation() {
  const t = useTranslations("NavLinks");
  const pathname = usePathname();
  const { setMobilMenuOpen } = useNavbarAction();

  const { isSmScreen } = useScreenBreakpoints();

  const navLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("announcements"), href: "/announcements" },
    { label: t("news"), href: "/news" },
    { label: t("eTwinning"), href: "/etwinning" },
  ];

  function onClickHandlerNavLinks() {
    setMobilMenuOpen(false);
  }

  return (
    <nav className="flex flex-col gap-2 py-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              isActive
                ? "text-primary dark:text-blue-600 font-semibold bg-primary/10 dark:bg-primary/30 sm:bg-background"
                : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-500/30 dark:hover:text-gray-200"
            }`}
            onClick={isSmScreen ? undefined : onClickHandlerNavLinks}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

function AuthButtons() {
  const t = useTranslations("AuthButtons");

  return (
    <div className="flex items-center justify-between gap-4 sm:gap-1 flex-row sm:flex-col lg:flex-row">
      <Button variant="outline" asChild className="grow">
        <Link href="/login">{t("login")}</Link>
      </Button>

      <Button asChild className="grow">
        <Link href="/signup">{t("signup")}</Link>
      </Button>
    </div>
  );
}

function LocalModeButtons() {
  return (
    <div className="flex items-center gap-1 flex-row">
      <ModeToggle></ModeToggle>
      <LocalOperation />
    </div>
  );
}

function MobilMenuButton() {
  const { isMobilMenuOpen, setMobilMenuOpen } = useNavbarAction();

  return (
    <Button
      variant={"outline"}
      size="icon"
      className="ml-4"
      onClick={() => setMobilMenuOpen(!isMobilMenuOpen)}
    >
      {isMobilMenuOpen ? <X /> : <Menu />}
    </Button>
  );
}

function NavbarOperations() {
  const { isSmScreen } = useScreenBreakpoints();
  const { isMobilMenuOpen } = useNavbarAction();

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm sm:px-4 bg-background">
      {isSmScreen ? (
        <div className="flex items-center justify-between min-h-18 gap-1 md:py-3 lg:py-0">
          <Logo />
          <Navigation />

          <div className="flex items-center gap-2 flex-col lg:flex-row">
            <LocalModeButtons />
            <AuthButtons />
          </div>
        </div>
      ) : (
        <div className="mx-auto px-4">
          <div className="flex flex-row justify-between min-h-18">
            <Logo />

            <div className="flex items-center">
              <LocalModeButtons />
              <MobilMenuButton />
            </div>
          </div>
          {isMobilMenuOpen && (
            <div className="border-t border-gray-100 dark:border-gray-900 pb-4 flex flex-col">
              <Navigation />
              <AuthButtons />
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default function Navbar() {
  return (
    <NavbarActionProvider>
      <NavbarOperations />
    </NavbarActionProvider>
  );
}
