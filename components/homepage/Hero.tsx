import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroPic from "@/public/hero_pic.jpeg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-130 md:min-h-150 overflow-hidden">
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
  );
}
