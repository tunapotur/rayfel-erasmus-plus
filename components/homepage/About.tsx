import about from "@/public/about.png";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import SectionTemplate from "./SectionTemplate";

const description =
  "Bu proje, öğrencilerimizin çevre bilinci ve dijital yetkinliklerini bütüncül bir yaklaşımla geliştirmeyi amaçlamaktadır. Proje kapsamında, sürdürülebilirlik kavramı yalnızca teorik bilgi olarak değil; günlük yaşamla ilişkilendirilen uygulamalı etkinliklerle ele alınacaktır.";

const highlights = [
  "Çevre dostu uygulamaların okul ortamında yaygınlaştırılması,",
  "Öğrencilerin dijital araçlar ile üretim yapmalarının sağlanması",
  "Erasmus+ iş birlikleri ile farklı ülkelerden okullarla ortak çalışmalar,",
];

export default function About() {
  return (
    <SectionTemplate
      name="Hakkımızda"
      header="Dijital Okul Yeşil Eğitim Gelecek Nesillerin Öğrenme Modeli"
      bg="bg-gray-100/50 dark:bg-gray-800/50"
      link={{ text: "Tümünü Gör", href: "/about" }}
    >
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
        {/* Content */}
        <div className="order-last md:order-first md:w-2/3 flex flex-col gap-4 md:pr-6">
          {/* Explanation - 2 paragraph */}
          <p className="text-muted-foreground text-base leading-relaxed">
            {description}
          </p>

          {/* List */}
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
          loading="eager"
          className="orter-first md:order-last md:w-1/3 object-contain object-center rounded-2xl shadow-xl"
          sizes="100vw"
        />
      </div>
    </SectionTemplate>
  );
}
