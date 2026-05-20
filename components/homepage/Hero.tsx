import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroPic from "@/public/hero_pic.jpg";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="h-72 w-full sm:h-96 md:h-120 lg:h-144 flex flex-col items-center relative z-15">
      <div className="relative size-full z-5 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={HeroPic}
            alt="Erasmus+ etkinlik görseli"
            fill
            loading="eager"
            className="w-full object-cover object-center z-2"
            sizes="100vw"
          />

          {/* Gradient overlay*/}
          <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/50 to-black/20 z-3" />
        </div>

        {/* Content */}
        <div className="absolute z-10 h-full sm:pt-18 sm:pl-9 md:pt-18 md:pl-12 flex flex-col sm:max-w-160 sm:gap-8 p-8 gap-3 w-full sm:w-[90%] max-[400px]:p-4">
          <h1 className="text-bright-header text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight drop-shadow-sm">
            Dijital Okul Yeşil Eğitim Gelecek Nesillerin Öğrenme Modeli
          </h1>

          <p className="text-bright-header md:text-base lg:text-lg leading-relaxed text-sm w-full sm:w-[75%]">
            Dijital Okul Yeşil Eğitim Gelecek Nesillerin Öğrenme Modeli isimli
            Erasmus+ projemizde yapacağımız etkinlikleri paylaşmak üzere
            kullandığımız web sitesine hoş geldiniz.
          </p>

          <Button
            asChild
            className="md:p-6 p-4 w-fit font-semibold md:text-base text-xs"
          >
            <Link href="/about">
              <span>Daha Fazla Bilgi</span>
              <ArrowRight size={24} />
            </Link>
          </Button>
        </div>

        {/* Bottom effect */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent z-4" />
      </div>
    </section>
  );
}
