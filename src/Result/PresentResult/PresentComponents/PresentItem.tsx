import React from 'react'
import { Gift } from '../../../data/Gift'

type ItemProp = {
    gift : Gift
};

const Item = (props:ItemProp) => {
  return (
    <div className='choice underline'>
        <div className = "seotext">{props.gift.name}</div>
    </div>
  )
}

export default Item