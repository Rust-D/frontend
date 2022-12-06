import React, { useState } from 'react'

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
