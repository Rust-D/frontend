import { Profile } from "./Profile";

export const GiftCategory = {
    FASHION: 'Fashion',
    DAILY_NECESSITIES: 'DailyNecessities',
    FOOD: 'Food',
    SPORTS: 'Sports',
    ENTERTAINMENT: 'Entertainment',
} as const

export type GiftCategory = typeof GiftCategory[keyof typeof GiftCategory]

export class Condition {
    minPrice: number;
    maxPrice: number;
    prifele: Profile;
    giftCategory: GiftCategory;

    constructor(minPrice: number, maxPrice: number, profile: Profile, giftCategory: GiftCategory) {
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        this.prifele = profile;
        this.giftCategory = giftCategory;
    }
}