import React, { useState } from 'react'
import { Gift } from '../../data/Gift';
import Item from './Item';

type GiftsPromiseProp = {
  GiftsPromise : Promise<Gift[]>
};

export default function Items(props: GiftsPromiseProp) {

  const [gifts, setGifts] = useState<Gift[]>([]);

  props.GiftsPromise.then((result) => {
      console.log("通信終了");
      setGifts(result);
      
  });

    return (<div className='gifts'>
      {gifts.map((gift) => <Item gift = {gift} />)}
    </div>);
}