import { Condition } from "./Conditions";
import { Gift } from "./Gift";

export class ConditionGifts {
    condition: Condition
    Gifts: Gift[]

    constructor(condition: Condition, Gifts: Gift[]) {
        this.condition = condition;
        this.Gifts = Gifts;
    }
}