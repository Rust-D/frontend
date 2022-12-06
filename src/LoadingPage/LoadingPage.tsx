import React, { useState } from 'react'
import './LoadingPage.css'

export default function LoadingPage (){
  return (
    <div id='overlay'>
      <div className="loading">
        <span className="circle"></span>
      </div>
        <div className='text'>
            提案中
        </div>
    </div>
  )
}
