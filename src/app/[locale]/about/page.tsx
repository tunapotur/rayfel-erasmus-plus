import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import rayfellogo from "@/public/logo64.png";
import erasmusplus from "@/public/erasmusplus.png";
import etwinning from "@/public/etwinning.png";
import HeroPic from "@/public/hero_pic.jpg";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="relative size-full z-5 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={HeroPic}
          alt="Erasmus+ etkinlik görseli"
          sizes="100vw"
          className="w-full object-cover object-center z-2"
        />

        {/* Gradient overlay*/}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20 z-3" />
      </div>

      {/* Content */}
      <div className="absolute z-10 h-full sm:pt-24 sm:pl-12 flex flex-col sm:max-w-160 sm:gap-8 p-4 gap-2 w-[90%]">
        <h1 className="text-gray-100 dark:text-gray-200 text-xl md:text-2xl lg:text-5xl font-bold leading-tight drop-shadow-sm">
          Dijital Okul Yeşil Eğitim Gelecek Nesillerin Öğrenme Modeli
        </h1>

        <p className="text-gray-200 dark:text-gray-300 lg:text-lg leading-relaxed text-sm w-[75%]">
          Dijital Okul Yeşil Eğitim Gelecek Nesillerin Öğrenme Modeli isimli
          Erasmus+ projemizde yapacağımız etkinlikleri paylaşmak üzere
          kullandığımız web sitesine hoş geldiniz.
        </p>

        <Button
          asChild
          className="lg:px-6 lg:py-6 w-fit font-semibold lg:text-md text-xs"
        >
          <Link href="/about">
            <span>Daha Fazla Bilgi</span>
            <ArrowRight size={24} />
          </Link>
        </Button>
      </div>

      {/* Bottom effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-4" />
    </section>
  );
}

function InfoCards() {
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
  );
}

export default function AboutPage() {
  return (
    <div className="h-72 sm:h-96 md:h-120 lg:h-144 flex flex-col items-center relative z-15">
      <Hero />
      {/* <InfoCards /> */}
    </div>
  );
}
