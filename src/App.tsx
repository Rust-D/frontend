import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

export default function App(){
    return(
        <div className = 'App'>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' /*component={homepage}*/ />
                    <Route path='/presents/input' /*component={presentsInput}*/ />
                    <Route path='/presents/result' /*component={presentsResult}*/ />
                    <Route path='/questionnaire/input' /*component={questionnaireInput}*/ />
                    <Route path='/questionnaire/result' /*component={questionnaireResult}*/ />
                </Switch>
            </BrowserRouter>
        </div>
    )
}