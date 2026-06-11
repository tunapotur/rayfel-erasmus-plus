import contents_info from '@/data/contents_info';

import Card from '../Card';

export default function InfoCards() {
    return (
        <section className="flex w-full flex-col gap-6 px-4 md:flex-row">
            {contents_info.map((card) => (
                <Card key={card.id} card={card} />
            ))}
        </section>
    );
}
