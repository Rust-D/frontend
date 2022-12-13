import React from 'react'
import { isTemplateMiddleOrTemplateTail } from 'typescript'
import { Gift } from '../../data/Gift'
type ItemProp = {
    gift: Gift
    OnRadio: Function
}


const Item = (prop: ItemProp) => {
  const ClickRadio = () => {
    prop.OnRadio(prop.gift)
  } 
  return (
    <div>
      <input type="radio" name="user_res" value={prop.gift.name} onClick = {ClickRadio} />{prop.gift.name}
    </div>
  )
}

export default Item