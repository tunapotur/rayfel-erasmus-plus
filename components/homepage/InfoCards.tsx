import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    icon: "/images/rayfel-logo.png", // ← kendi logonu koy
    iconAlt: "Rayfel logosu",
    title: "Rayfel",
    description:
      "Okulumuz Lüleburgaz Ramazan Yaman Fen Lisesi web sitesini inceleyebilirsiniz.",
    href: "/",
    iconFallback: "R",
    iconBg: "bg-blue-600",
  },
  {
    icon: "/images/erasmus-logo.png", // ← Erasmus+ logosu
    iconAlt: "Erasmus+ logosu",
    title: "Erasmus+",
    description:
      "Erasmus+ hakkında detaylı bilgi için Erasmus+ web sitesini inceleyebilirsiniz.",
    href: "https://erasmus-plus.ec.europa.eu",
    iconFallback: "E+",
    iconBg: "bg-blue-500",
  },
  {
    icon: "/images/etwinning-logo.png", // ← eTwinning logosu
    iconAlt: "eTwinning logosu",
    title: "eTwinning",
    description:
      "eTwinning projeleri hakkında detaylı bilgi için eTwinning web sitesini inceleyebilirsiniz.",
    href: "https://www.etwinning.net",
    iconFallback: "eT",
    iconBg: "bg-green-600",
  },
];

export default function InfoCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
          >
            {/* İkon */}
            <div className="w-12 h-12 relative">
              {/* next/image ile logo — hata olursa fallback gösterilir */}
              <div
                className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center text-white font-bold text-sm`}
              >
                {card.iconFallback}
              </div>
              {/*
                Gerçek logon varsa aşağıdaki bloğu kullan:
                <Image
                  src={card.icon}
                  alt={card.iconAlt}
                  fill
                  className="object-contain"
                />
              */}
            </div>

            {/* İçerik */}
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-gray-900 font-semibold text-base">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Link */}
            <Link
              href={card.href}
              className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-medium mt-auto transition-colors"
            >
              İncele
              <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
