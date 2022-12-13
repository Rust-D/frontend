import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import HomeView from './home/HomeView';
import PresentInput from './input/App';
import QResult from './Result/QuestionaireResult/questionaireResult';
import PResult from './Result/PresentResult/Result'


export default function App(){
    return(
        <div className = 'App'>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomeView} />
                    <Route path='/presents/input' component={PresentInput} />
                    /<Route path='/presents/result' /*component={PResult}*//>
                    <Route path='/questionnaire/result' component={QResult} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}