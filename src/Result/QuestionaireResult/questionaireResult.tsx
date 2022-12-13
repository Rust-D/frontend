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

function QResult() {

  const [gifts, setGifts] = useState<Gift[]>([{name:"null"}, {name:"yuha"}, {name:"nene"}, {name:"dwwwwkfkj"},{name:"kjf"}, {name:"kwdj"}]);
  const [value1, setValue1] = useState<number>(0)
  const [value2, setValue2] = useState<number>(1)
  const [value3, setValue3] = useState<number>(2)
  const [isShow, setIsShow] = useState<boolean>(false)
  const history = useHistory();
  const [ur, setUr] = useState<UserRes>({UCondition: condition, URes:""});
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
    console.log(ur)
    PostUserRes(ur);
    
    RedirectHome();
  }

  const giftss : Gift[] = [{name: "yuha"}, {name: "nene"}, {name: "null"}]
    
  return (
    <div id='result'>
      <LoadingPage isShow = {isShow}/>
      <div id='title'>診断結果</div><br/>
      {/*gifts.map((gift) => <Item gift={gift} OnRadio={() => {setUr({UCondition: ur.UCondition, URes: gift.name})}}/>)*/}

      <Item gift = {gifts[value1]} OnRadio = {OnRadio}/>
      <Item gift = {gifts[value2]} OnRadio = {OnRadio}/>
      <Item gift = {gifts[value3]} OnRadio = {OnRadio}/>

      <button onClick={ReRecommend}>再提案</button>
      
      <button onClick={SendUserRes} >送信</button>
    </div>
  )
}

export default QResult