import About from "@/components/homepage/About";
import Image from "next/image";
import news from "@/sample_data/news";

export default function AboutPage() {
  return (
    <div className="mb-auto mt-12">
      <About />

      <div>
        <Image src={news[0].image} alt={"test"} width={512} height={512} />
      </div>
    </div>
  );
}
