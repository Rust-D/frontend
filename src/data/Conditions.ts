import { Profile } from "./Profile";

export const GiftCategory = {
    FASHION: 'fashion',
    DAILY_NECESSITIES: 'dailyNecessities',
    FOOD: 'food',
    SPORTS: 'sports',
    ENTERTAINMENT: 'entertainment',
} as const

export type GiftCategory = typeof GiftCategory[keyof typeof GiftCategory]

export const Season = {
    SPRING: 'spring',
    SUMMER: 'summer',
    AUTUMN: 'autumn',
    WINTER: 'winter',
} as const

export type Season = typeof Season[keyof typeof Season]

export class Condition {
    minPrice: number;
    maxPrice: number;
    profile: Profile;
    season: Season;
    giftCategory: Array<GiftCategory>;

    constructor(minPrice: number, maxPrice: number, profile: Profile, season: Season, giftCategory: Array<GiftCategory>) {
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        this.profile = profile;
        this.season = season;
        this.giftCategory = giftCategory;
    }
}