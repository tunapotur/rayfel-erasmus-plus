import Hero from "@/components/homepage/Hero";
import InfoCards from "@/components/homepage/InfoCards";
import About from "@/components/homepage/About";
import Announcements from "@/components/homepage/Announcements";
import News from "@/components/homepage/News";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />

      <div className="gap-8 flex flex-col mt-8">
        <InfoCards />
        <About />
        <Announcements />
        <News />
      </div>

      <div className="flex flex-col h-256 w-full font-bold text-2xl items-center justify-center">
        Silinecek Boşluk
      </div>
    </div>
  );
}
