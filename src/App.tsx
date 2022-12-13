import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import presentInput from './input/input';
import questionnaireInput from './input/inputDiagnose';
import QResult from './Result/QuestionaireResult/questionaireResult';

import HomeView from './home/HomeView';

export default function App(){
    return(
        <div className = 'App'>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomeView} />
                    <Route path='/presents/input' component={presentInput} />
                    <Route path='/presents/result' /*component={presentsResult}*/ />
                    <Route path='/questionnaire/input' component={questionnaireInput}/>
                    <Route path='/questionnaire/result' component={QResult} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}