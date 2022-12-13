import Item from './PresentComponents/PresentItem'
import LoadingPage from '../../LoadingPage/LoadingPage'
import { isShow, setIsShow } from '../PublicData/OverlayState'
import { useState,useEffect } from 'react'
import { Gift } from '../../data/Gift'
import { GiftRepo, condition} from '../PublicData/GetGiftPromise'
import { ReRecommend, value1, value2, value3 } from '../PublicData/ReRecommend'
import './Result.css'




function Result() {
  const [GiftsPromise, SetGiftsPromise] = useState<Promise<Gift[]>>(new Promise((resolve) => {resolve([])}))
  const [gifts, setGifts] = useState<Gift[]>([{name:""}, {name:""}, {name:""}, {name:""},{name:""}, {name:""}]);

  useEffect(() => {
    SetGiftsPromise(GiftRepo.getRecommendedGiftList(condition))
  }, [])
  
  GiftsPromise.then((result) => {
      console.log("通信終了");
      setIsShow(false);  
      setGifts(result); 
  });
  return (
    <div id='result'>
      <LoadingPage isShow = {isShow}/>
      <div id='title'>提案結果</div><br/>

      <Item gift = {gifts[value1]} />
      <Item gift = {gifts[value2]} />
      <Item gift = {gifts[value3]} />
      
      <button onClick={ReRecommend}>再提案</button>
    </div>

    
  )
}

export default Result