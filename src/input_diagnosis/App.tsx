import React, { useState } from 'react'
import Category from './components/Category'
import Price from './components/Price'
import Profile from './components/Profile'
import { Scrollbars } from 'rc-scrollbars'

export default function App(){
    const style = {
        width:"100%",
        margin: "9 auto",
        marginTop: 0,
    };

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [click, setClick] = useState(Array(5).fill(0))
    const [sex, setSex] = useState(Array(3).fill(0))
    const [age, setAge] = useState(Array(6).fill(0))


    // function push(){
    //     //global変数に代入
    // }

    return(
        <div style={style}>
            <div>
                <h4>プレゼントを提案する</h4>
                <Scrollbars autoHeight autoHeightMin={100} autoHeightMax={600}>
                    <div className = 'Price'>
                        <>下限上限</><br/>
                        <Price price = {min} setPrice = {setMin}/>
                        <Price price = {max} setPrice = {setMax}/>
                    </div>
                    <div className = 'Profile'>
                        <div className='Sex'> 
                            <Profile name = "sex" click = {sex} setClick={setSex} time = {0} count = {3}/> 女性
                            <Profile name = "sex" click = {sex} setClick={setSex} time = {1} count = {3}/> 男性
                            <Profile name = "sex" click = {sex} setClick={setSex} time = {2} count = {3}/> その他
                        </div>
                        <div className='Age'>
                            <Profile name = "age" click = {age} setClick={setAge} time = {0} count = {6}/> 10代
                            <Profile name = "age" click = {age} setClick={setAge} time = {1} count = {6}/> 20代
                            <Profile name = "age" click = {age} setClick={setAge} time = {2} count = {6}/> 30代
                            <Profile name = "age" click = {age} setClick={setAge} time = {3} count = {6}/> 40代
                            <Profile name = "age" click = {age} setClick={setAge} time = {4} count = {6}/> 50代
                            <Profile name = "age" click = {age} setClick={setAge} time = {5} count = {6}/> 60代
                        </div>
                    </div>
                    <div className='Category'>
                        <Category click = {click} setClick={setClick} time = {0}/> ファッション
                        <Category click = {click} setClick={setClick} time = {1}/> 日用品
                        <Category click = {click} setClick={setClick} time = {2}/> 食べ物
                        <Category click = {click} setClick={setClick} time = {3}/> スポーツ・アウトドア
                        <Category click = {click} setClick={setClick} time = {4}/> エンタメ
                    </div>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </Scrollbars>
                <button type="button">提案</button>
            </div>
        </div>    
    );
}