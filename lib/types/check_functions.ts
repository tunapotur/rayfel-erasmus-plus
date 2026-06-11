import { ANNOUNCEMENT, INFO, NEWS } from './DataTypes';

export function isInfo(item: INFO | ANNOUNCEMENT | NEWS): item is INFO {
    return 'href' in item;
}

// card içinde type değeri varsa NEWS tipinde
export function isNEWS(item: INFO | ANNOUNCEMENT | NEWS): item is NEWS {
    return 'newsType' in item;
}

// card içinde slug değeri var ve type değeri yoksa ANNOUNCEMENT
export function isANNOUNCEMENT(
    item: INFO | ANNOUNCEMENT | NEWS,
): item is ANNOUNCEMENT {
    return 'slug' in item && !('newsType' in item);
}
