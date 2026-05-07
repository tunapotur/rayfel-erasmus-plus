import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[600px] overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg" // ← kendi görselini koy
          alt="Erasmus+ etkinlik görseli"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Koyu gradient overlay - sol taraf daha opak */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
      </div>

      {/* İçerik */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 h-full flex items-center py-20 md:py-28">
        <div className="max-w-[600px]">

          {/* Başlık */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 drop-shadow-sm">
            Dijital Okul Yeşil Eğitim
            <br />
            Gelecek Nesillerin
            <br />
            Öğrenme Modeli
          </h1>

          {/* Açıklama */}
          <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-[500px]">
            Dijital Okul Yeşil Eğitim Gelecek Nesillerin Öğrenme Modeli isimli
            Erasmus+ projemizde yapacağımız etkinlikleri paylaşmak üzere
            kullandığımız web sitesine hoş geldiniz.
          </p>

          {/* CTA Buton */}
          <Link
            href="/hakkimizda"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm md:text-base"
          >
            Daha Fazla Bilgi
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Alt kırpma etkisi */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
