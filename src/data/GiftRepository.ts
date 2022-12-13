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

        const params = {  
            headers:{
            'Accept': 'application/json, */*',
            'Content-type':'application/json'    
            },
            method : "POST", 
            body : JSON.stringify(request)
        } 
        
        const res = await fetch(url, params)
        const test1 = await res.json()

        console.log(test1.recommends)  // 多分Array<Gift>

        return (test1.recommennds)
    }
}