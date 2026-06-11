import { useTranslations } from 'next-intl';

import Card from '../Card';
import Wrapper from './Wrapper';

import contents_announcements from '@/data/contents_announcements';

export default function Announcements() {
    const t = useTranslations('AnnouncementsSection');

    return (
        <Wrapper
            name={t('name')}
            header={t('header')}
            linkText={t('linkText')}
            href="/announcements"
            hasBackground
        >
            <div className="flex w-full flex-col gap-4 md:flex-row">
                {contents_announcements.slice(0, 4).map((item, index) => (
                    <Card key={item.title} card={item} priority={index === 0} />
                ))}
            </div>
        </Wrapper>
    );
}
