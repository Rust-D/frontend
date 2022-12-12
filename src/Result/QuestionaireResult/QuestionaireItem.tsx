import React from 'react'
import { Gift } from '../../data/Gift'
type ItemProp = {
    gift: Gift
    OnRadio: Function
}
const Item = (prop: ItemProp) => {
  return (
    <div>
      <input type="radio" name="user_res" value={prop.gift.name} onClick = {prop.OnRadio} />{Gift.name}
    </div>
  )
}

export default Item