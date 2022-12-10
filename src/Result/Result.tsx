import React, { useRef, useState } from 'react'
import { GiftRepository } from '../data/GiftRepository'
import Items from './components/Items'
import { Link } from 'react-router-dom'
import LoadingPage from '../LoadingPage/LoadingPage'
import './Result.css'

function Result() {

  /* ここにコンディションのインスタンスを書く */
    const [isShow, setIsShow] = useState(true);
    const GiftRepo = new GiftRepository;
    const GiftsPromise = GiftRepo.getRecommendedGiftList();

    
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