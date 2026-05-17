import Hero from "@/components/homepage/Hero";
import InfoCards from "@/components/homepage/InfoCards";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Hero />
      <InfoCards />
    </div>
  );
}
