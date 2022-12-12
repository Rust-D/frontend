import { Condition } from "./Conditions";

export class UserRes  {
    UCondition : Condition;
    URes : string;

    constructor(UCondition: Condition, URes: string) {
        this.UCondition = UCondition;
        this.URes = URes;
    }
    
};