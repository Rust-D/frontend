// profile [sex, relationship, age]のcheckbox

import React from "react"

type CategoryProps = {
    click: Array<number>
    setClick: Function
    time: number
}

let fashion        = 0
let daily          = 0
let food           = 0
let sports         = 0
let entertainment  = 0
let count          = 0

export default function Category(props : CategoryProps){
    function setValue(event: React.ChangeEvent<HTMLInputElement>){
        if (props.time === 0){
            fashion += 1
            count = fashion
        }
        else if (props.time === 1){
            daily += 1
            count = daily
        }
        else if (props.time === 2){
            food += 1
            count = food
        }
        else if (props.time === 3){
            sports += 1
            count = sports
        }
        else{
            entertainment += 1
            count = entertainment
        }
        let tempClick = props.click;
            if (count % 2){
                tempClick[props.time] = 1;
                props.setClick(tempClick)
                console.log(props.click)
            }
            else {
                tempClick[props.time] = 0;
                props.setClick(tempClick)
                console.log(props.click)
            }
        }
    return (
        <input 
            onChange = {(event) => setValue(event)}
            type = "checkbox"
            value = {props.click[props.time]}
        />
    )
}