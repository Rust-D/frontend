import React, { useState } from 'react'
import Category from './components/Category'
import Price from './components/Price'
import Profile from './components/Profile'
import { Scrollbars } from 'rc-scrollbars'
import '../App.css'

export default function questionnaireInput(){  
    const style = {
        width:"100%",
        margin: "9 auto",
        marginTop: 0,
    };

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [sex, setSex] = useState("")
    const [age, setAge] = useState("")
    const [cate, setCate] = useState(Array(5))

    return(
        <div style={style}>
            <div>
                <h2>プレゼントを提案する</h2>
                <Scrollbars autoHeight autoHeightMin={100} autoHeightMax={800}>
                    <div className = 'Price'>
                        <p>価格</p>
                        <>下限</> <>上限</> <br/>
                        <Price price = {min} setPrice = {setMin}/>
                        <Price price = {max} setPrice = {setMax}/>
                    </div>
                    <div className = 'Profile'>
                        <h3>送る相手のプロフィール</h3>
                        <div className='Sex'> 
                            <p>性別</p>
                            <Profile name = "sex" value="male" val = {sex} setVal={setSex}/>男性 
                            <Profile name = "sex" value="female" val = {sex} setVal={setSex}/> 女性
                            <Profile name = "sex" value="other" val = {sex} setVal={setSex}/> その他
                        </div>
                        <div className='Age'>
                            <p>年齢</p>
                            <Profile name = "age" value="around_10" val = {age} setVal={setAge}/> 10代
                            <Profile name = "age" value="around_20" val = {age} setVal={setAge}/> 20代
                            <Profile name = "age" value="around_30" val = {age} setVal={setAge}/> 30代
                            <Profile name = "age" value="around_40" val = {age} setVal={setAge}/> 40代
                            <Profile name = "age" value="around_50" val = {age} setVal={setAge}/> 50代
                            <Profile name = "age" value="around_60" val = {age} setVal={setAge}/> 60代
                        </div>
                    </div>
                    <div className='Category'>
                        <p>贈り物のカテゴリー</p>
                            <Category value="Fashion"val = {cate} setVal={setCate}/> ファッション
                            <Category value="DailyNecessities"val = {cate} setVal={setCate}/> 日用品
                            <Category value="Food"val = {cate} setVal={setCate}/> 食べ物
                            <Category value="Sports"val = {cate} setVal={setCate}/> スポーツ・アウトドア
                            <Category value="Entartainment"val = {cate} setVal={setCate}/> エンタメ
                    </div>
                </Scrollbars>
                <br/>
                <button type="button">提案</button>
            </div>
        </div>    
    );
}