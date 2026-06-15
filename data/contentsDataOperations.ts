import { isANNOUNCEMENT, isNEWS } from '../lib/types/check_functions';
import type { ANNOUNCEMENT, INFO, NEWS } from '../lib/types/DataTypes';
import contentsDataRaw from './content-data.json';

const turkishMonths: { [key: string]: number } = {
    ocak: 0,
    şubat: 1,
    mart: 2,
    nisan: 3,
    mayıs: 4,
    haziran: 5,
    temmuz: 6,
    ağustos: 7,
    eylül: 8,
    ekim: 9,
    kasım: 10,
    aralık: 11,
};

function parseTurkishDate(dateStr: string): Date {
    const [day, monthStr, year] = dateStr.split(' ');
    const month = turkishMonths[monthStr.toLowerCase()];
    return new Date(Number(year), month ?? 0, Number(day));
}

/**
 * Hem NEWS hem de ANNOUNCEMENT dizilerini "dd mmmm yyyy" formatındaki
 * tarih alanına göre yeniden eskiye (büyükten küçüğe) sıralar.
 */
export function sortContentByDate<T extends NEWS | ANNOUNCEMENT>(
    contentList: T[],
): T[] {
    return [...contentList].sort((a, b) => {
        const dateA = parseTurkishDate(a.date).getTime();
        const dateB = parseTurkishDate(b.date).getTime();
        return dateB - dateA; // Yeniden eskiye sıralama
    });
}

// JSON'dan gelen veriyi doğrudan content tiplerine eşliyoruz
export const contentsData = contentsDataRaw as Array<
    INFO | ANNOUNCEMENT | NEWS
>;

// check_functions içindeki isNEWS otomatik olarak bir Type Guard'dır.
export function getAllNews(): NEWS[] {
    return sortContentByDate(contentsData.filter(isNEWS));
}

export function getAllAnnouncements(): ANNOUNCEMENT[] {
    return sortContentByDate(contentsData.filter(isANNOUNCEMENT));
}

export function getContentBySlug(
    slug: string,
): ANNOUNCEMENT | NEWS | undefined {
    // Önce dizideki elemanlardan sadece slug'a sahip olabilecek tipleri filtreliyoruz
    return (contentsData as Array<ANNOUNCEMENT | NEWS>).find(
        (item) => item.slug === slug,
    );
}
