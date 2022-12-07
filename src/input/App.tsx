import React, { useState } from 'react'
import Category from './components/Category'
import Price from './components/Price'
import ProfileInput from './components/Profile'
import { Scrollbars } from 'rc-scrollbars'
import { Condition, GiftCategory} from '../data/Conditions'
import { Profile, Sex, Relationship, Age } from '../data/Profile'
import Modal from 'react-modal'
import '../App.css'
import { useHistory } from 'react-router-dom'

Modal.setAppElement("#root");

export default function PresentInput(){
    const style = {
        width:"100%",
        margin: "9 auto",
        marginTop: 0,
    };

    const [min, setMin] = useState<number>(-1)
    const [max, setMax] = useState<number>(-1)
    const [sex, setSex] = useState<Sex>(Sex.MALE)
    const [rel, setRel] = useState<Relationship>(Relationship.FAMILY)
    const [age, setAge] = useState<Age>(Age.AROUND_10)
    const [cate, setCate] = useState<Array<GiftCategory>>(Array)
    const [modal, setModal] = useState(false)
    // const [conditions, setConditions] = useState({})
    // const [profile, setProfile] = useState({sex: Sex, relationship: Relationship, age: Age})
    
    const history = useHistory()

    function inputCondition(){
        console.log(min)
        console.log(max)
        console.log(sex)
        console.log(rel)
        console.log(age)
        console.log(cate)

        const Uprofile = new Profile(sex, rel, age)
        console.log(Uprofile)
        // setProfile({sex : sex, relationship: {rel}, age: {age}})
        // console.log(profile)
        const Uconditions = new Condition(min, max, Uprofile, cate)
        console.log(Uconditions)

        // history.push("result", {minPrice : min, maxPrice: max, profile: Uprofile, category: cate})result
        history.push("result" ,{condition: Uconditions})
    }

    return(
        <div style={style}>
            <div>
                <h2>プレゼントを提案する</h2>
                <Scrollbars autoHeight autoHeightMin={100} autoHeightMax={800}>

                    <div className = 'Price'>
                        <h3>価格</h3>
                        <ul className='Price_cont'>
                            <li className='Price_cont-inner'>下限</li>
                            <li className='Price_cont-inner'>上限</li>
                        </ul>
                        <ul className='Price_input'>
                            <li className='Price_input-inner'><Price price = {min} setPrice = {setMin}/></li>
                            <li className='Price_input-inner'><Price price = {max} setPrice = {setMax}/></li>
                        </ul>
                        <br/>
                    </div>

                    <div className = 'Profile'>
                        <div className='Sex'> 
                        <h3>送る相手のプロフィール</h3>
                            <h4>性別</h4>
                            <ul>
                                <li>男性</li>
                                <li>女性</li>
                                <li>その他</li>
                            </ul>
                            <ul className='Sex_input'>
                                <li className='Sex_input-inner'><ProfileInput name = "sex" value={Sex.MALE} val = {sex} setVal={setSex} checked={true}/></li>
                                <li className='Sex_input-inner'><ProfileInput name = "sex" value={Sex.FEMALE} val = {sex} setVal={setSex}/></li>
                                <li className='Sex_input-inner'><ProfileInput name = "sex" value={Sex.OTHER} val = {sex} setVal={setSex}/></li>
                            </ul>
                        </div>
                        <div className='Relationship'>
                            <h4>関係性</h4>
                            <ul>
                                <li>家族</li>
                                <li>友達</li>
                                <li>恋人</li>
                                <li>その他</li>
                            </ul>
                            <ul className='Rel_input'>
                                <li className='Rel_input-inner'><ProfileInput name = "rel" value={Relationship.FAMILY} val = {rel} setVal={setRel} checked ={true}/></li>
                                <li className='Rel_input-inner'><ProfileInput name = "rel" value={Relationship.FRIEND} val = {rel} setVal={setRel}/></li>
                                <li className='Rel_input-inner'><ProfileInput name = "rel" value={Relationship.LOVER} val = {rel} setVal={setRel}/></li>
                                <li className='Rel_input-inner'><ProfileInput name = "rel" value={Relationship.OTHER} val = {rel} setVal={setRel}/></li>
                            </ul>
                        </div>
                        <div className='Age'>
                            <h4>年齢</h4>
                            <ul>
                                <li>10代</li>
                                <li>20代</li>
                                <li>30代</li>
                                <li>40代</li>
                                <li>50代</li>
                                <li>60代</li>
                            </ul>
                            <ul className='Age_input'>
                                <li className='Age_input-inner'><ProfileInput name = "age" value={Age.AROUND_10} val = {age} setVal={setAge} checked={true}/></li>
                                <li className='Age_input-inner'><ProfileInput name = "age" value={Age.AROUND_20} val = {age} setVal={setAge}/></li>
                                <li className='Age_input-inner'><ProfileInput name = "age" value={Age.AROUND_30} val = {age} setVal={setAge}/></li>
                                <li className='Age_input-inner'><ProfileInput name = "age" value={Age.AROUND_40} val = {age} setVal={setAge}/></li>
                                <li className='Age_input-inner'><ProfileInput name = "age" value={Age.AROUND_50} val = {age} setVal={setAge}/></li>
                                <li className='Age_input-inner'><ProfileInput name = "age" value={Age.AROUND_60} val = {age} setVal={setAge}/></li>
                            </ul>
                        </div>
                    </div>
                    <div className='Category'>
                        <h3>贈り物のカテゴリー</h3>
                        <ul>
                            <li>ファッション</li>
                            <li>日用品</li>
                            <li>食べ物</li>
                            <li>スポーツ</li><br/>
                            <li>アウトドア</li>
                            <li>エンタメ</li>
                        </ul>
                        <ul className='Cat_input'>
                            <li className='Cat-_input-inner'><Category value={GiftCategory.FASHION} val = {cate} setVal={setCate}/></li>
                            <li className='Cat-_input-inner'><Category value={GiftCategory.DAILY_NECESSITIES} val = {cate} setVal={setCate}/></li>
                            <li className='Cat-_input-inner'><Category value={GiftCategory.FOOD} val = {cate} setVal={setCate}/> </li>
                            <li className='Cat-_input-inner'><Category value={GiftCategory.SPORTS} val = {cate} setVal={setCate}/></li>
                            <li className='Cat-_input-inner'><Category value={GiftCategory.ENTERTAINMENT} val = {cate} setVal={setCate}/></li>
                        </ul>
                    </div>
                </Scrollbars>
                <br/>
                <button type="button" onClick={() => (min === -1 || max === -1 || cate.length === 0) ? setModal(true) : inputCondition()}>提案</button>
                <Modal isOpen={modal}>
                    <button onClick={() => setModal(false)}></button>
                    <h1>入力漏れがあります！</h1>
                </Modal>
            </div>
        </div>    
    );
    }