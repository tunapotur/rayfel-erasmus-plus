import { isANNOUNCEMENT, isNEWS } from '../lib/types/check_functions';
import type { ANNOUNCEMENT, INFO, NEWS } from '../lib/types/DataTypes';
import contentsDataRaw from './content-data.json';

// JSON'dan gelen veriyi doğrudan content tiplerine eşliyoruz
export const contentsData = contentsDataRaw as Array<
    INFO | ANNOUNCEMENT | NEWS
>;

// check_functions içindeki isNEWS otomatik olarak bir Type Guard'dır.
export function getAllNews(): NEWS[] {
    return contentsData.filter(isNEWS);
}

export function getAllAnnouncements(): ANNOUNCEMENT[] {
    return contentsData.filter(isANNOUNCEMENT);
}

export function getContentBySlug(
    slug: string,
): ANNOUNCEMENT | NEWS | undefined {
    // Önce dizideki elemanlardan sadece slug'a sahip olabilecek tipleri filtreliyoruz
    return (contentsData as Array<ANNOUNCEMENT | NEWS>).find(
        (item) => item.slug === slug,
    );
}
