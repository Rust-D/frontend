import { Condition } from "./Conditions";
import { Gift } from "./Gift";

export class GiftRepository{
    /**
     * 
     * @param conditions - プレゼントの提案をしてもらうための条件
     * @returns Array<Gift> - 提案されたGiftのリスト
     */
     getRecommendedGiftList(conditions: Condition): Promise<Array<Gift>> {
        
    }
 }