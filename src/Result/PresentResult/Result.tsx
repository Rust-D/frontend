import Items from './PresentComponents/PresentItems'
import LoadingPage from '../../LoadingPage/LoadingPage'
import { GiftsPromise } from '../PublicData/GetGiftPromise'
import { isShow, setIsShow } from '../PublicData/OverlayState'
import './Result.css'

function Result() {
    
  return (
    <div id='result'>
      <LoadingPage isShow = {isShow}/>
      <div id='title'>診断結果</div><br/>
      <Items 
        GiftsPromise = {GiftsPromise}
        setIsShow = {setIsShow}
       />
    </div>
  )
}

export default Result