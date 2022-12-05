import { type } from "os"

export const Sex = {
    MALE: 'male',
    FEMALE: 'female',
    OTHER: 'other',
} as const

export type Sex = typeof Sex[keyof typeof Sex]

export const Relationship = {
    FAMILY: 'family',
    FRIEND: 'friend',
    LOVER:  'lover',
    OTHER:  'other',
} as const

export type Relationship = typeof Relationship[keyof typeof Relationship]

export const Age = {
    AROUND_10: 'around_10',
    AROUND_20: 'around_20',
    AROUND_30: 'around_30',
    AROUND_40: 'around_40',
    AROUND_50: 'around_50',
    AROUND_60: 'around_60',
} as const

export type Age = typeof Age[keyof typeof Age]

export class Profile {
    sex: Sex;
    relationship: Relationship;
    age: Age;

    constructor(sex: Sex, relationship: Relationship, age: Age){
        this.sex = sex;
        this.relationship = Relationship.FAMILY;
        this.age = age;
    }
}

const profile = new Profile(Sex.MALE, Relationship.FAMILY, Age.AROUND_30)