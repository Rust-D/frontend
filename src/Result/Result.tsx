import React, { useState } from 'react'
import { GiftRepository } from '../data/GiftRepository'

function Result() {

    const GiftRepo = new GiftRepository
    const [Gifts, SetGifts] = useState(GiftRepo.getRecommendedGiftList(/*nanikakaku*/))

    
  
  return (
    <div>提案結果</div>
    

    
  )
}

export default Result