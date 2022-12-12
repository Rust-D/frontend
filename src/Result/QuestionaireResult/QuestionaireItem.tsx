import React from 'react'
import { Gift } from '../../data/Gift'
type ItemProp = {
    gift: Gift
    OnRadio: Function
}
const Item = (prop: ItemProp) => {
  return (
    <div>Item</div>
  )
}

export default Item