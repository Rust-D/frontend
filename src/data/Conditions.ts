import { Profile } from "./Profile";

export const GiftCategory = {
    FASHION: 'Fashion',
    DAILY_NECESSITIES: 'DailyNecessities',
    FOOD: 'Food',
    SPORTS: 'Sports',
    ENTERTAINMENT: 'Entertainment',
} as const

export type GiftCategory = typeof GiftCategory[keyof typeof GiftCategory]

export const Season = {
    SPRING: 'Spring',
    SUMMER: 'Summer',
    AUTUMN: 'Autumn',
    WINTER: 'Winter',
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