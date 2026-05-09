"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import logo from "@/public/logo64.png";

const navLinks = [
  { label: "Ana Sayfa", href: "/", active: true },
  { label: "Hakkımızda", href: "/about" },
  { label: "Duyurular", href: "/announcements " },
  { label: "Haberler", href: "/news" },
  { label: "eTwinning", href: "/etwinning" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      {/* image */}
      <div className="w-6 h-6 flex items-center justify-center">
        <Image src={logo} alt="Rayfel Logo" />
      </div>

      {/* text */}
      <span className="font-semibold">
        Rayfel <span className="text-primary font-bold">Erasmus+</span>
      </span>
    </Link>
  );
}

function Navigation() {
  return (
    <nav className="hidden md:flex items-center gap-1">
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
            link.active
              ? "text-primary font-semibold"
              : " hover:text-gray-900 hover:bg-gray-200/70"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-background">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Navigation />

          <ModeToggle></ModeToggle>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              asChild
            >
              <Link href="/login">Giriş Yap</Link>
            </Button>

            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 rounded-lg"
              asChild
            >
              <Link href="/signup">Kayıt</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu open/close"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 pb-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-md ${
                  link.active
                    ? "text-blue-600 font-semibold bg-blue-50"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-3 px-3">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <Link href="/giris">Giriş Yap</Link>
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <Link href="/signup">Kayıt</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
