import { Condition } from "./Conditions";

export class UserRes  {
    UCondition : Condition;
    URes : String;

    constructor(UCondition: Condition, URes: String) {
        this.UCondition = UCondition;
        this.URes = URes;
    }
    
};