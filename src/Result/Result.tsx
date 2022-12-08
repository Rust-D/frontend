import React, { useState } from 'react'
import { GiftRepository } from '../data/GiftRepository'

function Result() {

  /* ここにコンディションのインスタンスを書く */
  

    const GiftRepo = new GiftRepository
    const [Gifts, SetGifts] = useState(GiftRepo.getRecommendedGiftList())

    

    
  
  return (
    <div>提案結果</div>
    

    
  )
}

export default Result