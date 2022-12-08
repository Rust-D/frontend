import React, { useState } from 'react'
import { GiftRepository } from '../data/GiftRepository'
import Items from './components/Items'

function Result() {

  /* ここにコンディションのインスタンスを書く */
  

    const GiftRepo = new GiftRepository
    const GiftsPromise = GiftRepo.getRecommendedGiftList();
    
  return (
    <div>
      <div>提案結果</div><br />
      <Items GiftsPromise = {GiftsPromise}/>


    </div>

    

    
  )
}

export default Result