import { useTranslations } from 'next-intl';

import Card from '@/components/Card';

import Wrapper from './Wrapper';

import { getAllNews } from '@/data/contentsDataOperations';

export default function News() {
    const t = useTranslations('NewsSection');
    const contents_news = getAllNews();

    return (
        <Wrapper
            name={t('name')}
            header={t('header')}
            linkText={t('linkText')}
            href="/news"
        >
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
                {contents_news.slice(0, 6).map((item, index) => (
                    <Card key={item.title} card={item} priority={index === 0} />
                ))}
            </div>
        </Wrapper>
    );
}
