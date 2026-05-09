import Navbar from "@/components/NavbarCloude";
import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";

export default function HomePage() {
  return (
    <div className="min-h-screen max-w-4xl">
      <Navbar />
      <Hero />
      <InfoCards />
    </div>
  );
}
