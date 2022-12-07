import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import './HomeView.css'

export default function HomeView() {
  const history = useHistory()

  const Suggestion = () => {
    history.push('/presents/input')
  };

  const diagnosis = () => {
    history.push('/questionnaire/input')
  };

  return (
    <div>
      <div className='header'>
        <div className='maintitle'>
          P!ck UPresent
        </div>
        <div className='subtitle'>
          ｰサプライズプレゼント提案ツールｰ
        </div>
      </div>
      <button className='button' onClick={Suggestion}>
        プレゼントを提案する
      </button>
      <button className='button' onClick={diagnosis}>
        プレゼントを診断する
      </button>
    </div>
  )
}