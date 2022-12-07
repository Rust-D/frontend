import React from 'react'
import { Gift } from '../../data/Gift';

type GiftsProp = {
  Gifts : Promise<Gift[]>
  SetGifts : Function
};

export default function Items(props: GiftsProp) {

  let gifts: Gift[];
  props.Gifts.then((result) => {
      gifts = result;
      return (
        gifts.map((gift) => <Item gift = {gift}/>)
      );
    })
}