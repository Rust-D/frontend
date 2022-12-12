import Items from '../PresentResult/PresentComponents/PresentItems'
import LoadingPage from '../../LoadingPage/LoadingPage'
import './Result.css'
import { condition, GiftsPromise } from '../PublicData/GetGiftPromise'
import { isShow ,setIsShow} from '../PublicData/OverlayState'
import { PostUserRes } from '../PublicData/PostUserRes'
import { UserRes } from '../../data/UserRes'
import React, { useState } from 'react'
import Item from './QuestionaireItem'
import { Gift } from '../../data/Gift'
function QResult() {

  const [ur, setUr] = useState<UserRes>({UCondition: condition, URes:""});
  const [gifts, setGifts] = useState<Gift[]>([{name:""}, {name:""}, {name:""}, {name:""},{name:""}, {name:""}]);

  GiftsPromise.then((result) => {
      console.log("通信終了");
      setIsShow(false);  
      setGifts(result); 
  });
    
  return (
    <div id='result'>
      <LoadingPage isShow = {isShow}/>
      <div id='title'>診断結果</div><br/>
      {gifts.map((gift) => <Item gift={gift} OnRadio={() => {setUr({UCondition: ur.UCondition, URes: gift.name})}}/>)}
      <button onClick={()  => {PostUserRes(ur)}}>送信</button>
    </div>
  )
}

export default QResult