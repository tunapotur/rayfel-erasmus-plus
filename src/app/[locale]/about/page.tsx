import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import rayfellogo from "@/public/logo64.png";
import erasmusplus from "@/public/erasmusplus.png";
import etwinning from "@/public/etwinning.png";

export default function AboutPage() {
  const cards = [
    {
      icon: rayfellogo, // ← Okul logosu
      iconAlt: "Rayfel logosu",
      title: "Rayfel",
      description:
        "Okulumuz Lüleburgaz Ramazan Yaman Fen Lisesi web sitesini inceleyebilirsiniz.",
      href: "/",
      iconFallback: "R",
      iconBg: "bg-blue-600",
    },
    {
      icon: erasmusplus, // ← Erasmus+ logosu
      iconAlt: "Erasmus+ logosu",
      title: "Erasmus+",
      description:
        "Erasmus+ hakkında detaylı bilgi için Erasmus+ web sitesini inceleyebilirsiniz.",
      href: "https://erasmus-plus.ec.europa.eu",
      iconFallback: "E+",
      iconBg: "bg-blue-500",
    },
    {
      icon: etwinning, // ← eTwinning logosu
      iconAlt: "eTwinning logosu",
      title: "eTwinning",
      description:
        "eTwinning projeleri hakkında detaylı bilgi için eTwinning web sitesini inceleyebilirsiniz.",
      href: "https://www.etwinning.net",
      iconFallback: "eT",
      iconBg: "bg-green-600",
    },
  ];

  return (
    <div>
      <div className="w-full h-192 bg-amber-500 flex flex-col items-center relative z-15">
        <div className="w-full bg-blue-600/75 h-128 absolute top-0 z-5">
          <div className=""></div>
        </div>
        <div className="w-full bottom-24 h-64 bg-green-600/75 absolute z-10 flex flex-row justify-around flex-wrap gap-3">
          {/* <div className="w-64 h-full bg-background rounded-lg"></div>
          <div className="w-64 h-full bg-background rounded-lg"></div>
          <div className="w-64 h-full bg-background rounded-lg"></div> */}
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow w-72"
            >
              {/* icon */}
              <div className="w-12 h-12 relative flex justify-center align-middle">
                <Image
                  src={card.icon}
                  alt={card.iconAlt}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              {/* content */}
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
      </div>
    </div>
  );
}
