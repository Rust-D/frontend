import React, { useState } from 'react'
import { Gift } from '../../../data/Gift';
import Item from './PresentItem';

type ItemsProps = {
  GiftsPromise : Promise<Gift[]>
  setIsShow : Function
};


export default function Items(ItemsProps: ItemsProps) {

  const [gifts, setGifts] = useState<Gift[]>([]);

  ItemsProps.GiftsPromise.then((result) => {
      console.log("通信終了");
      ItemsProps.setIsShow(false);  
      setGifts(result); 
  });

    return (<div className='gifts'>
      {gifts.map((gift) => <Item gift = {gift} />)}
    </div>);
}