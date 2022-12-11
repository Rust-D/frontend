import { Condition } from "./Conditions";
import { Gift } from "./Gift";

export class GiftRepository{
    /**
     * 
     * @param conditions - プレゼントの提案をしてもらうための条件
     * @returns Array<Gift> - 提案されたGiftのリスト
     */
     async getRecommendedGiftList(conditions: Condition): Promise<Array<Gift>> {

        const url = "http://localhost:5000/test"
        const params = {method : "POST", body : JSON.stringify({hage:"hoge"})}
        const res = await fetch(url, params)
        console.log(res)
        const test1 = await res.json() //オブジェクトがかえってくる
        console.log(test1)

        return (test1)
    }
 }