import { ANNOUNCEMENT, INFO, NEWS } from './DataTypes';

// item'ın INFO tipinde olup olmadığını kontrol eder
export function isInfo(item: INFO | ANNOUNCEMENT | NEWS): item is INFO {
    return item.type === 'info';
}

// item'ın NEWS tipinde olup olmadığını kontrol eder
export function isNEWS(item: INFO | ANNOUNCEMENT | NEWS): item is NEWS {
    return item.type === 'news';
}

// item'ın ANNOUNCEMENT tipinde olup olmadığını kontrol eder
export function isANNOUNCEMENT(
    item: INFO | ANNOUNCEMENT | NEWS,
): item is ANNOUNCEMENT {
    return item.type === 'announcement';
}
