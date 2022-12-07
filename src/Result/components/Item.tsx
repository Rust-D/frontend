import React from 'react'
import { Gift } from '../../data/Gift'

type ItemProp = {
    Item : Gift
};

const Item = (props:ItemProp) => {
  return (
    <div>
        <div>{props.Item.name}</div><br />
    </div>
  )
}

export default Item