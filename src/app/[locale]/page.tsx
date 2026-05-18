import Hero from "@/components/homepage/Hero";
import InfoCards from "@/components/homepage/InfoCards";
import About from "@/components/homepage/About";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col items-center gap-6">
        <Hero />
        <InfoCards />
      </div>

      <About />

      <div className="flex flex-col h-128 w-full font-bold text-2xl items-center justify-center">
        Silinecek Boşluk
      </div>
    </div>
  );
}
