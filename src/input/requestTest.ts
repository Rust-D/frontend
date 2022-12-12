import { json } from "stream/consumers"

export default async function Test(){
    const url = "http://localhost:5000/test"
    const params = {method : "POST", body : JSON.stringify({id: "123", name : "しゅう"})}
    const res = await fetch(url, params)
    console.log(res)
    const test1 = await res.json()
    console.log(test1) //object

    const json = JSON.stringify(test1) //json

    console.log(json)

    const test3= JSON.stringify({id: "123", name : "しゅう"}) 
    const test2 = JSON.parse(test3) 
    const test4 = JSON.stringify(test2)
    console.log(test3) // json
    console.log(test2) // object
    console.log(test4) // json
}