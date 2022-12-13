import { UserRes } from "../../data/UserRes";

export class Res{
    key: string;
    value: string;
    constructor(key: string, value : string) {
        this.key = key;
        this.value = value;
    }
}

export class PostUserRes{

     async postList(userRes: UserRes): Promise<Res> {
        const url = "http://localhost:5000/test"

        const request = {
            moneyMin: userRes.UCondition.minPrice,
            moneyMax: userRes.UCondition.maxPrice,
            age:      userRes.UCondition.profile.age,
            sex:      userRes.UCondition.profile.sex,
            season:   userRes.UCondition.season,
            topic:   userRes.UCondition.giftCategory,
            userRes: userRes.URes
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
        console.log(res)
        const test1 = await res.json()

        return (test1)
    }
}