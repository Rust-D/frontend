import CheckBox from '../input/components/CheckBox'
import Radio from '../input/components/Radio'
import Price from '../input/components/Price'

import { Condition, Season, GiftCategory} from '../data/Conditions'
import { Profile, Sex, Age } from '../data/Profile'

import '../App.css'

import Modal from 'react-modal'
import { useHistory } from 'react-router-dom'
import { Scrollbars } from 'rc-scrollbars'
import React, { useState } from 'react'


Modal.setAppElement("#root");

export default function App(){

    const Modalstyle = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
    };  

    const style = {
        width: "100%",
        margin: "0 auto",
        marginTop: 50,
    };

    const [min, setMin] = useState<number>(-1)
    const [max, setMax] = useState<number>(-1)
    const [sex, setSex] = useState<Sex>(Sex.MALE)
    const [age, setAge] = useState<Age>(Age.AROUND_10)
    const [cate, setCate] = useState<Array<GiftCategory>>(Array)
    const [modal, setModal] = useState(false)
    const [season, setSeason] = useState<Season>(Season.SPRING)
    
    const history = useHistory()

    function inputCondition(){

        const Uprofile = new Profile(sex, age)
        const Uconditions = new Condition(min, max, Uprofile, season, cate)

        history.push("result" ,{condition: Uconditions}) //result画面にわたす、遷移もしてくれる
    }

    return(       
        <div>
           <div className='header_input'>
            <div className='maintetle'>
                P!ck UPresent
            </div>
            <div className='subtitle'>
                -サプライズプレゼント提案ツール-
            </div>
            <br/>
           </div>

           <div className='input'>
            <h2>プレゼントを診断する</h2>
            <Scrollbars autoHeight autoHeightMin={100} autoHeightMax={600} style={style}>
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
                {/* Price終わり */}

                <div className = 'Profile'>
                    <div className='Sex'> 
                        <h3>プロフィール</h3>
                        <h4>性別</h4>
                        <ul>
                            <li>男性</li>
                            <li>女性</li>
                            <li>その他</li>
                        </ul>
                        <ul className='Sex_input'>
                            <li className='Sex_input-inner'><Radio name = "sex" value={Sex.MALE} val = {sex} setVal={setSex}/></li>
                            <li className='Sex_input-inner'><Radio name = "sex" value={Sex.FEMALE} val = {sex} setVal={setSex}/></li>
                            <li className='Sex_input-inner'><Radio name = "sex" value={Sex.OTHER} val = {sex} setVal={setSex}/></li>
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
                            <li className='Age_input-inner'><Radio name = "age" value={Age.AROUND_10} val = {age} setVal={setAge}/></li>
                            <li className='Age_input-inner'><Radio name = "age" value={Age.AROUND_20} val = {age} setVal={setAge}/></li>
                            <li className='Age_input-inner'><Radio name = "age" value={Age.AROUND_30} val = {age} setVal={setAge}/></li>
                            <li className='Age_input-inner'><Radio name = "age" value={Age.AROUND_40} val = {age} setVal={setAge}/></li>
                            <li className='Age_input-inner'><Radio name = "age" value={Age.AROUND_50} val = {age} setVal={setAge}/></li>
                            <li className='Age_input-inner'><Radio name = "age" value={Age.AROUND_60} val = {age} setVal={setAge}/></li>
                        </ul>
                    </div>
                </div> 
                {/* Profile終わり */}

                <div className="Season">
                    <h3>季節</h3>
                        <ul>
                            <li>春</li>
                            <li>夏</li>
                            <li>秋</li>
                            <li>冬</li>
                        </ul>
                        <ul className='Season_input'>
                            <li className='Season_input-inner'><Radio name = "season" value={Season.SPRING} val = {season} setVal={setSeason}/></li>
                            <li className='Season_input-inner'><Radio name = "season" value={Season.SUMMER} val = {season} setVal={setSeason}/></li>
                            <li className='Season_input-inner'><Radio name = "season" value={Season.AUTUMN} val = {season} setVal={setSeason}/></li>
                            <li className='Season_input-inner'><Radio name = "season" value={Season.WINTER} val = {season} setVal={setSeason}/></li>
                        </ul>
                </div>
                {/* Season終わり */}

                <div className='Category'>
                    <h3>贈り物のカテゴリー</h3>
                    <ul>
                        <li>ファッション</li>
                        <li>日用品</li>
                        <li>食べ物</li>
                        <li>スポーツ<br/>アウトドア</li>
                        <li>エンタメ</li>
                    </ul>
                    <ul className='Cat_input'>
                        <li className='Cat-_input-inner'><CheckBox value={GiftCategory.FASHION} val = {cate} setVal={setCate}/></li>
                        <li className='Cat-_input-inner'><CheckBox value={GiftCategory.DAILY_NECESSITIES} val = {cate} setVal={setCate}/></li>
                        <li className='Cat-_input-inner'><CheckBox value={GiftCategory.FOOD} val = {cate} setVal={setCate}/> </li>
                        <li className='Cat-_input-inner'><CheckBox value={GiftCategory.SPORTS} val = {cate} setVal={setCate}/></li>
                        <li className='Cat-_input-inner'><CheckBox value={GiftCategory.ENTERTAINMENT} val = {cate} setVal={setCate}/></li>
                    </ul>
                </div>
                {/* Category終わり */}
            </Scrollbars>
            </div>
            <br/>
            <button type="button" onClick={() => (min === -1 || max === -1 || cate.length === 0) ? setModal(true) : inputCondition()}>提案</button>
            {/* 入力漏れがあったときのモーダル*/}
            <Modal isOpen={modal} style = {Modalstyle}>
                <button onClick={() => setModal(false)}>close</button>
                <h1>入力漏れがあります！</h1>
            </Modal>
        </div>
    );
    }