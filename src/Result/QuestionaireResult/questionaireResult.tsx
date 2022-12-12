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
import { ReRecommend, value1, value2, value3 } from '../PublicData/ReRecommend'
function QResult() {

  const [ur, setUr] = useState<UserRes>({UCondition: condition, URes:""});
  const [gifts, setGifts] = useState<Gift[]>([{name:""}, {name:""}, {name:""}, {name:""},{name:""}, {name:""}]);
  /*const [gifts, setGifts] = useState<Gift[]>([{name:""}, {name:""}, {name:""}, {name:""},{name:""}, {name:""}]);
  const [value1, setValue1] = useState<number>(0)
  const [value2, setValue2] = useState<number>(1)
  const [value3, setValue3] = useState<number>(2)*/
  GiftsPromise.then((result) => {
      console.log("通信終了");
      setIsShow(false);  
      setGifts(result); 
  });

  /*const ReRecommend = () => {
    setValue1(3)
    setValue2(4)
    setValue3(5)
  }*/

  const OnRadio = (gift : Gift) => {
    setUr({UCondition: ur.UCondition, URes: gift.name})
  }
    
  return (
    <div id='result'>
      <LoadingPage isShow = {isShow}/>
      <div id='title'>診断結果</div><br/>
      {/*gifts.map((gift) => <Item gift={gift} OnRadio={() => {setUr({UCondition: ur.UCondition, URes: gift.name})}}/>)*/}

      <Item gift = {gifts[value1]} OnRadio = {OnRadio}/>
      <Item gift = {gifts[value2]} OnRadio = {OnRadio}/>
      <Item gift = {gifts[value3]} OnRadio = {OnRadio}/>

      <button onClick={ReRecommend}>再提案</button>
      
      <button onClick={()  => {PostUserRes(ur)}}>送信</button>
    </div>
  )
}

export default QResult