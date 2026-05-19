import Image from "next/image";
import Link from "next/link";
import { Globe, Share2, Mail } from "lucide-react";
import logo from "@/public/logo_rayfel.png";

const quickLinks = [
  { label: "Ramazan Yaman Fen Lisesi", href: "#", active: true },
  { label: "Erasmus+", href: "#" },
  { label: "eTwinning", href: "#" },
];

const institutions = [
  { label: "Erasmus Avrupa Komisyonu", href: "#" },
  { label: "Türkiye Ulusal Ajansı", href: "#" },
  { label: "Esep eTwinning", href: "#" },
];

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: Share2, href: "#", label: "Sosyal Medya" },
  { icon: Mail, href: "#", label: "E-posta" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-24">
      {/* Main Footer */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Logo & Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Rayfel Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-bold text-base text-foreground">
                Rayfel Projeler
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Akademik projelerin dijital evi. Geleceği Dijital Okul Yeşil
              Eğitim Gelecek Nesillerin Öğrenme Modeli
            </p>
          </div>

          {/* Col 2 — Hızlı Erişim */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-foreground">Hızlı Erişim</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors hover:text-primary ${
                      link.active
                        ? "text-primary underline underline-offset-4"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Kurumlar */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-foreground">Kurumlar</h4>
            <ul className="flex flex-col gap-2.5">
              {institutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Bizi Takip Edin */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-foreground">
              Bizi Takip Edin
            </h4>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 text-muted-foreground hover:text-primary hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-800" />

      {/* Bottom Bar */}
      <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-muted-foreground text-sm">
          © 2026 Rayfel Projeler. Tüm hakları saklıdır.
        </p>
        <p className="text-muted-foreground text-xs tracking-widest uppercase">
          Ramazan Yaman Fen Lisesi
        </p>
      </div>
    </footer>
  );
}
