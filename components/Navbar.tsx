"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import logo from "@/public/logo64.png";
import LocalOperation from "@/components/LocaleSwitch";
import { useTranslations } from "next-intl";
import { usePathname } from "@/src/i18n/navigation";
// import { Menu, X } from "lucide-react";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      {/* image */}
      <div className="size-7.5 flex items-center justify-center">
        <Image src={logo} alt="Rayfel Logo" />
      </div>

      {/* text */}
      <div className="font-semibold flex flex-col items-start leading-tight">
        <div>Rayfel</div>
        <div className="text-primary font-bold">Erasmus+</div>
      </div>
    </Link>
  );
}

function Navigation() {
  const t = useTranslations("NavLinks");
  const pathname = usePathname();

  const navLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("announcements"), href: "/announcements" },
    { label: t("news"), href: "/news" },
    { label: t("eTwinning"), href: "/etwinning" },
  ];

  return (
    // <nav className="grid grid-cols-5 grid-rows-1 gap-1 justify-items-center">
    <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center lg:flex lg:items-center lg:flex-wrap">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              isActive
                ? "text-primary font-semibold"
                : "hover:text-gray-900 hover:bg-gray-100"
            }`}
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
    <div className="flex items-center flex-col gap-1 lg:py-2 lg:flex-row">
      <Button variant="outline" asChild>
        <Link href="/login">{t("login")}</Link>
      </Button>

      <Button asChild>
        <Link href="/signup">{t("signup")}</Link>
      </Button>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-sm px-4 bg-background">
      <div className="flex items-center justify-between min-h-18 gap-3 py-2">
        <Logo />
        <Navigation />

        <div className="flex items-center gap-3 flex-col sm:flex-row">
          <div className="flex items-center flex-col gap-1 lg:py-2 md:flex-row">
            <ModeToggle></ModeToggle>
            <LocalOperation />
          </div>
          <AuthButtons />
        </div>
      </div>
    </header>
  );
}
