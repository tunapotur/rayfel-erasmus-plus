import Hero from "@/components/homepage/Hero";
import InfoCards from "@/components/homepage/InfoCards";
import about from "@/public/about.png";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col items-center gap-6">
        <Hero />
        <InfoCards />
      </div>

      <AboutSection />

      <div className="flex flex-col h-128 w-full font-bold text-2xl items-center justify-center">
        Silinecek Boşluk
      </div>
    </div>
  );
}

function AboutSection() {
  const highlights = [
    "Çevre dostu uygulamaların okul ortamında yaygınlaştırılması,",
    "Öğrencilerin dijital araçlar ile üretim yapmalarının sağlanması",
    "Erasmus+ iş birlikleri ile farklı ülkelerden okullarla ortak çalışmalar,",
  ];

  const description =
    "Bu proje, öğrencilerimizin çevre bilinci ve dijital yetkinliklerini bütüncül bir yaklaşımla geliştirmeyi amaçlamaktadır. Proje kapsamında, sürdürülebilirlik kavramı yalnızca teorik bilgi olarak değil; günlük yaşamla ilişkilendirilen uygulamalı etkinliklerle ele alınacaktır.";

  return (
    <section className="w-full flex flex-row gap-6 justify-center items-center">
      {/* Content */}
      <div className="flex flex-col gap-6">
        {/* Üst etiket */}
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">
          Hakkımızda
        </span>

        {/* Başlık */}
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-foreground">
          Dijital Okul Yeşil Eğitim Gelecek Nesillerin Öğrenme Modeli
        </h2>

        {/* Açıklama - 2 paragraf */}
        <p className="text-muted-foreground text-base leading-relaxed">
          {description}
        </p>
        <p className="text-muted-foreground text-base leading-relaxed">
          {description}
        </p>

        {/* Liste */}
        <ul className="flex flex-col gap-3">
          {highlights.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-muted-foreground text-sm"
            >
              <CheckCircle2
                className="text-primary mt-0.5 shrink-0"
                size={18}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <Image
        src={about}
        alt="Dijital Okul Yeşil Eğitim projesi görseli"
        // fill
        className="w-96 h-fit object-contain object-center rounded-2xl shadow-xl"
        sizes="100vw"
      />
    </section>
  );
}
