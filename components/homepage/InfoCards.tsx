import Card from "@/components/Card";
import info_cards from "@/sample_data_tr/info_cards";

export default function InfoCards() {
  return (
    <section className="w-full flex flex-col gap-6 md:flex-row px-4">
      {info_cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
}
