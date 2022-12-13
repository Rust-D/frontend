import { ConditionalExpression } from "typescript";
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

        const request = {
            moneyMin: conditions.minPrice,
            moneyMax: conditions.maxPrice,
            age:      conditions.profile.age,
            sex:      conditions.profile.sex,
            season:   conditions.season,
            topic:   conditions.giftCategory
        }

        // {
        //     moneyMin: 1000,
        //     moneyMax: 10000,
        //     age:      'around_10',
        //     sex:      'mare',
        //     season:   'spring',
        //     topic:    ['fashion', 'sports']
        // } こんなんでリクエストとばす
        

        const params = {method : "POST", body : JSON.stringify(request)} // json文字列でリクエストを送信
        const res = await fetch(url, params)
        console.log(res)
        const test1 = await res.json()
        
        // 　　　　↓こんなんかえってくる　（オブジェクトとして取得）
        // {
        //     recommends: [あいう、あいう、あいう]
        // }

        console.log(test1.recommends) //多分Array<Gift>

        return (test1.recommennds)
    }

    async Test(conditoin: Condition): Promise<Array<Gift>> {

        console.log("condition:" , Condition)
        return [{name:"yuha"}, {name: "nene"}, {name: "null"}, {name: "mario"}, {name: "nusajima"}, {name: "aisu"}]
    }
 }