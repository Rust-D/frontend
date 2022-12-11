import { type } from "os"

export const Sex = {
    MALE: 'male',
    FEMALE: 'female',
    OTHER: 'other',
} as const

export type Sex = typeof Sex[keyof typeof Sex]


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
    age: Age;

    constructor(sex: Sex, age: Age){
        this.sex = sex;
        this.age = age;
    }
}

// const profile = new Profile(Sex.MALE, Relationship.FAMILY, Age.AROUND_30)