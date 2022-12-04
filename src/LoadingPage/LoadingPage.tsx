import React, { useState } from 'react'

const LoadingPage = () => {
  return (
    <div id='overlay'>
      <div className="loading">
        <span className="circle"></span>
      </div>
        <div className='text'>
            overlaydesu
        </div>
    </div>
  )
}

export default LoadingPage