import React, { useRef, useState } from 'react'
import { GiftRepository } from '../data/GiftRepository'
import Items from './components/Items'
import { Link } from 'react-router-dom'
import LoadingPage from '../LoadingPage/LoadingPage'
import './Result.css'
import { Condition } from '../data/Conditions'
import { useLocation } from 'react-router-dom'

function Result() {

  /* ここにコンディションのインスタンスを書く */
  const location = useLocation<{condition: Condition}>();
  const condition = new Condition( 
    location.state.condition.maxPrice,
    location.state.condition.minPrice,
    location.state.condition.profile,
    location.state.condition.giftCategory
  );

  const [isShow, setIsShow] = useState(true);
  const GiftRepo = new GiftRepository;
  const GiftsPromise = GiftRepo.getRecommendedGiftList(condition);

    
  return (
    <div id='result'>
      <LoadingPage isShow = {isShow}/>
      <div id='title'>診断結果</div><br/>
      <Items 
        GiftsPromise = {GiftsPromise}
        setIsShow = {setIsShow}
       />
    </div>
  )
}

export default Result