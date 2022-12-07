import { Condition, GiftCategory} from '../data/Conditions'
import { Profile, Sex, Relationship, Age } from '../data/Profile'
import {useLocation} from 'react-router'

interface Price{
    min: number;
    max: number;
}

export default function Test(){
    // const location = useLocation<{minPrice : number, maxPrice : number, profile: Profile, category: Array<GiftCategory>}>();
    const location = useLocation<{condition: Condition}>();
    console.log(location.state.condition.minPrice)
    
    return(
        <div>
        <h3>あ</h3>
        <h4>{location.state.condition.minPrice}</h4>
        </div>
    )
}
