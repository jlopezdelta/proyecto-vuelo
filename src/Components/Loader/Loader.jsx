import React from 'react'
import "./loader.css"
import { DotSpinner } from '@uiball/loaders'

function Loader() {
  return (
    <div className='center-loader'>
        <DotSpinner 
            size={100}
            speed={0.9} 
            color="#6305dd" 
        />
    </div>
  )
}

export default Loader



