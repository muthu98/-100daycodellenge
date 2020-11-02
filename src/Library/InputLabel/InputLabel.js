import React from 'react'
import './InputLabel.css'
function InputLabel({ label, name }) {
    return (
        <div className="inputlabelcontainer">
             <label htmlFor={name} >{label}</label>
        </div>
       
    )
}

export default InputLabel
