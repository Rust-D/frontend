import React, { useState } from 'react'
import { GiftRepository } from '../data/GiftRepository'
import Items from './components/Items'
import { Link } from 'react-router-dom'

function Result() {

  /* ここにコンディションのインスタンスを書く */
  

    const GiftRepo = new GiftRepository
    const GiftsPromise = GiftRepo.getRecommendedGiftList();
    
  return (
    <div id='result'>
      <div id='title'>診断結果</div><br />
      <Items GiftsPromise = {GiftsPromise}/>



    </div>

    

    
  )
}

export default Result