import Hero from "@/components/homepage/Hero";
import InfoCards from "@/components/homepage/InfoCards";
import About from "@/components/homepage/About";
import Announcements from "@/components/homepage/Announcements";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />

      <div className="px-6 gap-16 flex flex-col mt-8">
        <InfoCards />
        <About />
        <Announcements />
      </div>

      <div className="flex flex-col h-128 w-full font-bold text-2xl items-center justify-center">
        Silinecek Boşluk
      </div>
    </div>
  );
}
