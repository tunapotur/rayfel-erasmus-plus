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
    {
      label: "Ramazan Yaman Fen Lisesi",
      href: "https://ramazanyamanfenlisesi.meb.k12.tr",
    },
    { label: "Erasmus+", href: "https://erasmus-plus.ec.europa.eu" },
    { label: "eTwinning", href: "https://school-education.ec.europa.eu" },
  ],
  institutions: [
    {
      label: "Erasmus Avrupa Komisyonu",
      href: "https://erasmus-plus.ec.europa.eu/",
    },
    { label: "Türkiye Ulusal Ajansı", href: "https://www.ua.gov.tr" },
    {
      label: "Esep eTwinning",
      href: "https://school-education.ec.europa.eu/en/etwinning/projects/etwinning-esep/twinspace",
    },
  ],
  socialLinks: [
    { iconName: "Globe", href: "#", label: "Website" },
    { iconName: "Share2", href: "#", label: "Sosyal Medya" },
    { iconName: "Mail", href: "#", label: "E-posta" },
  ],
};

export default footer_data;
