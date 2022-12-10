import React, { useState } from 'react'
import './LoadingPage.css'

type ShowProps = {
    isShow: boolean
};

export default function LoadingPage (LoadingState : ShowProps){
  if(LoadingState.isShow) {
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
  }else{
    return null;
  }
}
