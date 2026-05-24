import Card_v2 from "../Card";
import contents_info from "@/sample_data/contents_info";

export default function InfoCards() {
  return (
    <section className="w-full flex flex-col gap-6 md:flex-row px-4">
      {contents_info.map((card) => (
        <Card_v2 key={card.id} card={card} />
      ))}
    </section>
  );
}
