import about from "@/public/about.png";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const description =
  "Bu proje, öğrencilerimizin çevre bilinci ve dijital yetkinliklerini bütüncül bir yaklaşımla geliştirmeyi amaçlamaktadır. Proje kapsamında, sürdürülebilirlik kavramı yalnızca teorik bilgi olarak değil; günlük yaşamla ilişkilendirilen uygulamalı etkinliklerle ele alınacaktır.";

const highlights = [
  "Çevre dostu uygulamaların okul ortamında yaygınlaştırılması,",
  "Öğrencilerin dijital araçlar ile üretim yapmalarının sağlanması",
  "Erasmus+ iş birlikleri ile farklı ülkelerden okullarla ortak çalışmalar,",
];
export default function About() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-primary text-base font-bold uppercase tracking-widest">
        Hakkımızda
      </h2>

      <h3 className="text-3xl font-bold leading-tight text-gray-800 dark:text-gray-200 ">
        Dijital Okul Yeşil Eğitim Gelecek Nesillerin Öğrenme Modeli
      </h3>

      <div className="flex flex-row items-center">
        {/* Content */}
        <div className="w-2/3 flex flex-col gap-4 pr-6">
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
          className="w-1/3 object-contain object-center rounded-2xl shadow-xl"
          src={about}
          alt="Dijital Okul Yeşil Eğitim projesi görseli"
          // fill
          sizes="100vw"
        />
      </div>
    </section>
  );
}
