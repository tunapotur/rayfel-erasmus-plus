import Image from "next/image";
import HeroPic from "@/public/hero_pic.jpeg";

export default function HomePage() {
  return (
    <div>
      <div className="relative">
        <Image src={HeroPic} alt="Rayfel Web page hero" />
        <div className="bg-linear-to-r from-gray-900/80 to-gray-600/40 absolute inset-0"></div>
      </div>
    </div>
  );
}
