import React from 'react'
import { Gift } from '../../data/Gift'
type ItemProp = {
    gift: Gift
    OnRadio: Function
    number: string
}


const Item = (prop: ItemProp) => {
  const ClickRadio = () => {
    prop.OnRadio(prop.gift)
  } 

  const key_id: string = prop.number
  console.log(prop.number)
  return (
    <div className='choice underline'>
        <input id={key_id} className="radiobutton" type="radio" name="user_res" value={prop.gift.name} onClick = {ClickRadio}/>
        <label htmlFor={key_id}>{prop.gift.name}</label>
    </div>
  )
}

export default Item