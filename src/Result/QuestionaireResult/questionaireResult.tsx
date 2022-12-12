import Items from '../PresentResult/PresentComponents/PresentItems'
import LoadingPage from '../../LoadingPage/LoadingPage'
import './Result.css'
import { GiftsPromise } from '../PublicData/GetGiftPromise'
import { isShow ,setIsShow} from '../PublicData/OverlayState'

function QResult() {

  
    
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

export default QResult