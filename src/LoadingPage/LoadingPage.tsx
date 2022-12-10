import React, { useState } from 'react'
import './LoadingPage.css'

type IsShowProps = {
    isShow: boolean
};

export default function LoadingPage (props : IsShowProps){
  if(props.isShow) {
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
