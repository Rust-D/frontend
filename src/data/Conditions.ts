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
    profile: Profile;
    giftCategory: Array<GiftCategory>;

    constructor(minPrice: number, maxPrice: number, profile: Profile, giftCategory: Array<GiftCategory>) {
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        this.profile = profile;
        this.giftCategory = giftCategory;
    }
}