"use client";

import { Link, usePathname } from "@/src/i18n/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import logo from "@/public/logo_rayfel.png";
import LocalOperation from "@/components/LocalOperation";
import { useTranslations } from "next-intl";
import { createContext, useContext, useState } from "react";
import { Menu, X } from "lucide-react";

import { useOutsideClick } from "@/lib/useOutsideClick";

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

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-1">
      {/* image */}
      <div className="relative flex size-3.5 items-center justify-center sm:size-7.5">
        <Image
          src={logo}
          alt="Rayfel Logo"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>

      {/* text */}
      <div className="flex items-start gap-1 leading-tight font-semibold sm:flex-col sm:gap-0">
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

  const navLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("announcements"), href: "/announcements" },
    { label: t("news"), href: "/news" },
    // { label: t("eTwinning"), href: "/etwinning" },
  ] as const;

  return (
    <nav className="flex flex-col gap-2 px-2 py-4 sm:grid sm:grid-cols-3 sm:items-center md:grid-cols-4 lg:flex lg:flex-row">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-md px-3 py-1.5 transition-colors sm:max-w-28 sm:truncate sm:text-center ${
              isActive
                ? "text-primary bg-primary/10 dark:bg-primary/30 sm:bg-background font-semibold dark:text-blue-600"
                : "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-500/30 dark:hover:text-gray-200"
            }`}
            onClick={() => setMobilMenuOpen(false)}
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
  const { setMobilMenuOpen } = useNavbarAction();

  return (
    <div className="flex flex-row items-center justify-between gap-4 sm:flex-col sm:gap-2 lg:flex-row">
      <Button
        variant="outline"
        asChild
        className="grow"
        onClick={() => setMobilMenuOpen(false)}
      >
        <Link href="/login">{t("login")}</Link>
      </Button>

      <Button asChild className="grow" onClick={() => setMobilMenuOpen(false)}>
        <Link href="/signup">{t("signup")}</Link>
      </Button>
    </div>
  );
}

function LocalModeButtons() {
  return (
    <div className="flex flex-row items-center justify-between gap-2 sm:flex-col sm:gap-2 lg:flex-row">
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

function NavbarOverlay() {
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-gray-300/20 backdrop-blur-xs dark:bg-gray-600/50"></div>
  );
}

function NavbarOperations() {
  const { isMobilMenuOpen, setMobilMenuOpen } = useNavbarAction();
  const ref = useOutsideClick(() => setMobilMenuOpen(false));

  return (
    <>
      <header
        ref={ref}
        className="bg-background sticky top-0 z-50 w-full shadow-sm sm:px-4 lg:min-w-5xl"
      >
        {/* Web page menu */}
        <div className="hidden min-h-18 items-center justify-between gap-1 sm:flex sm:py-3 lg:py-0">
          <Logo />
          <Navigation />

          <div className="flex items-center gap-2">
            <LocalModeButtons />
            <AuthButtons />
          </div>
        </div>

        {/* Mobil Menu */}
        <div className="mx-auto px-4 sm:hidden">
          <div className="flex min-h-18 flex-row justify-between">
            <Logo />

            <div className="flex items-center">
              <LocalModeButtons />
              <MobilMenuButton />
            </div>
          </div>
          {isMobilMenuOpen && (
            <div className="bg-background absolute right-0 left-0 flex flex-col px-4 pb-4">
              <div className="flex flex-col border-t border-gray-200 dark:border-gray-800">
                <Navigation />
                <AuthButtons />
              </div>
            </div>
          )}
        </div>
      </header>
      {isMobilMenuOpen && <NavbarOverlay />}
    </>
  );
}

export default function Navbar() {
  return (
    <NavbarActionProvider>
      <NavbarOperations />
    </NavbarActionProvider>
  );
}
