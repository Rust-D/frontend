import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PuresentInput from './input/App';

export default function App(){
    return(
        <div className = 'App'>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' /*component={}*/ />
                    <Route path='/presents/input' component={PuresentInput} />
                    <Route path='/presents/result' /*component={presentsResult}*/ />
                    <Route path='/questionnaire/input' /*component={questionnaireInput}*/ />
                    <Route path='/questionnaire/result' /*component={questionnaireResult}*/ />
                </Switch>
            </BrowserRouter>
        </div>
    )
}