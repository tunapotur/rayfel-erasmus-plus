import { icons } from "lucide-react";

interface QuickLink {
  label: string;
  href: string;
}

interface Institution {
  label: string;
  href: string;
}

interface SocialLink {
  // Rastgele herhangi bir string değil, SADECE Lucide içindeki gerçek ikon isimleri yazılabilir!
  iconName: keyof typeof icons; // ← artık "Globe", "Mail" gibi son eksiz isimler
  href: string;
  label: string;
}

interface FooterData {
  quickLinks: QuickLink[];
  institutions: Institution[];
  socialLinks: SocialLink[];
}

const footer_data: FooterData = {
  quickLinks: [
    { label: "Ramazan Yaman Fen Lisesi", href: "#" },
    { label: "Erasmus+", href: "#" },
    { label: "eTwinning", href: "#" },
  ],
  institutions: [
    { label: "Erasmus Avrupa Komisyonu", href: "#" },
    { label: "Türkiye Ulusal Ajansı", href: "#" },
    { label: "Esep eTwinning", href: "#" },
  ],
  socialLinks: [
    { iconName: "Globe", href: "#", label: "Website" },
    { iconName: "Share2", href: "#", label: "Sosyal Medya" },
    { iconName: "Mail", href: "#", label: "E-posta" },
  ],
};

export default footer_data;
