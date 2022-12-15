import LoadingPage from '../../LoadingPage/LoadingPage'
import '../Result.css'
import { PostUserRes } from '../PublicData/PostUserRes'
import { UserRes } from '../../data/UserRes'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Item from './QuestionaireItem'
import { useHistory } from 'react-router-dom'
import { Gift } from '../../data/Gift'
import { Condition } from '../../data/Conditions'
import { useLocation } from 'react-router-dom'
import { GiftRepository } from '../../data/GiftRepository'
import { condition } from '../../data/Sample'
import { ConditionGifts } from '../../data/ConditionGifts'

function QResult() {

  const [value1, setValue1] = useState<number>(0)
  const [value2, setValue2] = useState<number>(1)
  const [value3, setValue3] = useState<number>(2)
  const history = useHistory();
  const location = useLocation<{conditionGifts: ConditionGifts}>();
  const gifts = location.state.conditionGifts.Gifts;
  console.log("JSON", JSON.stringify(gifts))
  const [ur, setUr] = useState<UserRes>({UCondition: location.state.conditionGifts.condition, URes:""});
  /*const location = useLocation<{condition: Condition}>();
  const condition = new Condition( 
  location.state.condition.maxPrice,
  location.state.condition.minPrice,
  location.state.condition.profile,
  location.state.condition.season,
  location.state.condition.giftCategory
  );
  const [ur, setUr] = useState<UserRes>({UCondition: condition, URes:""});

  const GiftRepo = new GiftRepository;
  const GiftsPromise =  GiftRepo.Test(condition)


  
  GiftsPromise.then((result) => {
      console.log("通信終了");
      console.log(result)
      setIsShow(false);  
      setGifts(result); 
  });*/

  const ReRecommend = () => {
    setValue1(3)
    setValue2(4)
    setValue3(5)
  }

  const RedirectHome = () =>  {
    history.push("/");
}

  const OnRadio = (gift : Gift) => {
    setUr({UCondition: ur.UCondition, URes: gift.name})
  }

  const SendUserRes = () => {
    const PUR = new PostUserRes()
    console.log(ur)
    PUR.postList(ur);
    
    RedirectHome();
  }
    
  return (
    <div id='result'>
      <div className='header_input'></div>
      <div className='title'>診断結果</div>
      
      {/*gifts.map((gift) => <Item gift={gift} OnRadio={() => {setUr({UCondition: ur.UCondition, URes: gift.name})}}/>)*/}

      <Item gift = {gifts[value1]} OnRadio = {OnRadio} number = "1"/>
      <Item gift = {gifts[value2]} OnRadio = {OnRadio} number = "2"/>
      <Item gift = {gifts[value3]} OnRadio = {OnRadio} number = "3"/>

      <button className='Rep' onClick={ReRecommend}>再診断</button>

      <button className='Post' onClick={SendUserRes} >送信</button>
    </div>
  )
}

export default QResult