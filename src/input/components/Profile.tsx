import React from "react"

type ProfileProps = {
    click: Array<number>
    setClick: Function
    time: number
    name: string
    count : number
}
let tempClick : Array<number> // useStateいじる用

export default function Profile(props : ProfileProps){

    //props.Clickの今押されたモノ以外を0にする関数
    function setValue(event: React.ChangeEvent<HTMLInputElement>){
        tempClick = props.click
        tempClick[props.time] = 1
        // チェックボックスの数が3, 4, 6の時の処理
        if (props.count === 3){
            switch (props.time){
                case 0:
                    tempClick[1] = 0
                    tempClick[2] = 0
                    props.setClick(tempClick)
                    console.log(tempClick)                
                    break;
                case 1:
                    tempClick[0] = 0
                    tempClick[2] = 0
                    props.setClick(tempClick)
                    console.log(tempClick)                
                    break;
                case 2:
                    tempClick[0] = 0
                    tempClick[1] = 0
                    props.setClick(tempClick)
                    console.log(tempClick)                
                    break;
            }
        }
        else if (props.count === 4){
            switch (props.time){
                case 0:
                    tempClick[1] = 0
                    tempClick[2] = 0
                    tempClick[3] = 0
                    props.setClick(tempClick)
                    console.log(tempClick)                
                    break;
                case 1:
                    tempClick[0] = 0
                    tempClick[2] = 0
                    tempClick[3] = 0
                    props.setClick(tempClick)
                    console.log(tempClick)                
                    break;
                case 2:
                    tempClick[0] = 0
                    tempClick[1] = 0
                    tempClick[3] = 0
                    props.setClick(tempClick)
                    console.log(tempClick)                
                    break;
                case 3:
                    tempClick[0] = 0
                    tempClick[1] = 0
                    tempClick[2] = 0
                    props.setClick(tempClick)
                    console.log(tempClick)                
                    break;
            }
        }
        else if (props.count === 6){
            switch (props.time){
                case 0:
                    tempClick[1] = 0
                    tempClick[2] = 0
                    tempClick[3] = 0
                    tempClick[4] = 0
                    tempClick[5] = 0
                    props.setClick(tempClick)
                    console.log(tempClick)                
                    break;
                case 1:
                    tempClick[0] = 0
                    tempClick[2] = 0
                    tempClick[3] = 0
                    tempClick[4] = 0
                    tempClick[5] = 0
                    props.setClick(tempClick)
                    console.log(tempClick)                
                    break;
                case 2:
                    tempClick[0] = 0
                    tempClick[1] = 0
                    tempClick[3] = 0
                    tempClick[4] = 0
                    tempClick[5] = 0
                    props.setClick(tempClick)
                    console.log(tempClick)                
                    break;
                case 3:
                    tempClick[0] = 0
                    tempClick[1] = 0
                    tempClick[2] = 0
                    tempClick[4] = 0
                    tempClick[5] = 0
                    props.setClick(tempClick)
                    console.log(tempClick)                
                    break;
                case 4:
                    tempClick[0] = 0
                    tempClick[1] = 0
                    tempClick[2] = 0
                    tempClick[3] = 0
                    tempClick[5] = 0
                    props.setClick(tempClick)
                    console.log(tempClick)                
                    break;
                case 5:
                    tempClick[0] = 0
                    tempClick[1] = 0
                    tempClick[2] = 0
                    tempClick[3] = 0
                    tempClick[4] = 0
                    props.setClick(tempClick)
                    console.log(tempClick)                
                    break;
            }
        }
    }
    return (
        <input 
            onChange = {(event) => setValue(event)}
            type = "radio"
            name = {props.name}
            value = {props.click[props.time]}
        />
    )
    
}
