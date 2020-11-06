import React from 'react'
import './Fullscreen.css'
import Motion from '../Motion/Motion'
import Bubble from '../Bubble/Bubble'

function Fullscreen() {
    return (
        <div className="fullscreen">
            <div className="section">
            <Motion/>
            </div>
            <div className="section">
            <Bubble/>
            </div>
           
           
       
        </div>
    )
}

export default Fullscreen
