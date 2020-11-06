import React from 'react'

import './Motion.css'
import car from './image/car.png'
import wheel from './image/wheel.png'
function Motion() {
    return (
        <div  className="sky">
            <div className="highway"></div>
            <div className="city" ></div>
            <div className="car">
                <img src={car} alt="car" />
            </div>
            <div className="wheel">
                <img src={wheel} alt="wheel"  className="backwheel"/>
                <img src={wheel} alt="wheel" className="frontwheel" />
            </div>
          
        </div>
    )
}

export default Motion
