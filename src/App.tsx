import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import presentInput from './input/App';
import questionnaireInput from './input_diagnosis/App'

export default function App(){
    return(
        <div className = 'App'>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' /*component={}*/ />
                    <Route path='/presents/input' component={presentInput} />
                    <Route path='/presents/result' /*component={presentsResult}*/ />
                    <Route path='/questionnaire/input' component={questionnaireInput}/>
                    <Route path='/questionnaire/result' /*component={questionnaireResult}*/ />
                </Switch>
            </BrowserRouter>
        </div>
    )
}