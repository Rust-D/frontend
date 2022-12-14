import '../Result.css'
import { useState } from 'react'
import Item from './PresentComponents/PresentItem'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { ConditionGifts } from '../../data/ConditionGifts'




function Result() {
  const [value1, setValue1] = useState<number>(0)
  const [value2, setValue2] = useState<number>(1)
  const [value3, setValue3] = useState<number>(2)
  const history = useHistory();
  const location = useLocation<{conditionGifts: ConditionGifts}>();
  const gifts = location.state.conditionGifts.Gifts;
  console.log("JSON", JSON.stringify(gifts))

  const ReRecommend = () => {
    setValue1(3)
    setValue2(4)
    setValue3(5)
  }

  const RedirectHome = () =>  {
    history.push("/");
}



  return (
    <div id='result'>
      <div id='title'>提案結果</div><br/>

      <Item gift = {gifts[value1]} />
      <Item gift = {gifts[value2]} />
      <Item gift = {gifts[value3]} />

      <button onClick={ReRecommend}>再提案</button>
      <button onClick={RedirectHome}>Home</button>
    </div>
  )
}

export default Result