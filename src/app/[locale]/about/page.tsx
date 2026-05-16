import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import rayfellogo from "@/public/logo64.png";
import erasmusplus from "@/public/erasmusplus.png";
import etwinning from "@/public/etwinning.png";
import HeroPic from "@/public/hero_pic.jpeg";

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
    // Wrapper
    <div className="h-160 flex flex-col items-center relative z-15">
      <section className="absolute size-full z-5 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={HeroPic}
            alt="Erasmus+ etkinlik görseli"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Gradient overlay*/}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center py-20 md:py-28">
          <div className="max-w-150">
            {/* Header */}
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 drop-shadow-sm">
              <div>
                Dijital Okul Yeşil Eğitim Gelecek Nesillerin Öğrenme Modeli
              </div>
            </h1>

            {/* Text */}
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-125">
              Dijital Okul Yeşil Eğitim Gelecek Nesillerin Öğrenme Modeli isimli
              Erasmus+ projemizde yapacağımız etkinlikleri paylaşmak üzere
              kullandığımız web sitesine hoş geldiniz.
            </p>

            {/* Buton */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              <span>Daha Fazla Bilgi</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom effect */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Cards */}
      <section className="w-full -bottom-48 absolute z-10 flex flex-row justify-around flex-wrap gap-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-background h-64 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow w-72"
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
      </section>
    </div>
  );
}
