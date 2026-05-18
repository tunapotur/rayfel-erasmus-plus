import Card from "@/components/Card";

const cards = [
  {
    title: "Rayfel",
    description:
      "Okulumuz Lüleburgaz Ramazan Yaman Fen Lisesi web sitesini inceleyebilirsiniz.",
    link: { text: "İncele", href: "/" },
  },
  {
    title: "Erasmus+",
    description:
      "Erasmus+ hakkında detaylı bilgi için Erasmus+ web sitesini inceleyebilirsiniz.",
    link: { text: "İncele", href: "/" },
  },
  {
    title: "eTwinning",
    description:
      "eTwinning projeleri hakkında detaylı bilgi için eTwinning web sitesini inceleyebilirsiniz.",
    link: { text: "İncele", href: "/" },
  },
];

export default function InfoCards() {
  return (
    <section className="w-full flex flex-col gap-6 md:flex-row">
      {cards.map((card) => (
        <Card key={card.title} card={card} />
      ))}
    </section>
  );
}
