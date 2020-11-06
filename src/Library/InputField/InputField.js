import React, { useEffect, useRef, useState } from 'react'
import './InputField.css'
function InputField({ type, id, name, label, placeholder, value, color, variants,onChange}) {
    const [coloreffect, setcoloreffect] = useState('#4a70ec')
    const containerref = useRef()
    const labelrref = useRef()
    const inputerref = useRef()
    useEffect(() => {
        // document.addEventListener("click", clickFunction);
        if(color) setcoloreffect(color)
        var label = document.getElementById(name + "1")
        if (variants === "Outline") {
            containerref.current.classList.remove('inputfieldcontainer')
            labelrref.current.classList.remove('inputlabel')
            inputerref.current.classList.remove('inputfield')
            containerref.current.classList.add('inputfieldcontaineroutline')
            labelrref.current.classList.add('inputlabeloutline')
            inputerref.current.classList.add('inputfieldoutline')

            if (type === "date") {
                label.classList.add('triggerlabeloutline')
            }
        }
        else {
            containerref.current.classList.add('inputfieldcontainer')
            labelrref.current.classList.add('inputlabel')
            inputerref.current.classList.add('inputfield')
            containerref.current.classList.remove('inputfieldcontaineroutline')
            labelrref.current.classList.remove('inputlabeloutline')
            inputerref.current.classList.remove('inputfieldoutline')
            if (type === "date") {
                label.classList.add('triggerlabel')
            }

        }
    })

    const clickFunction = (e) => {

        console.log(e.target.name);
        var label = document.getElementById(name + "1")
        var inputtag = document.getElementsByName(name)
     
        if (type !== "date") {
            if (variants === "Outline") {
                name === e.target.name || inputtag[0].value.length>0 ? label.classList.add('triggerlabeloutline') : label.classList.remove('triggerlabeloutline')
            }
            else {
                name === e.target.name || inputtag[0].value.length>0  ? label.classList.add('triggerlabel') : label.classList.remove('triggerlabel')
            }
        }

        name === e.target.name ? label.style.color = coloreffect : label.style.color = "black"
    }
    return (
        <div className="inputfieldcontainer" ref={containerref} >
            <label className="inputlabel " id={name + "1"}  htmlFor={name} ref={labelrref} >{label}</label>
            <input type={type} className="inputfield  " ref={inputerref} id={id} name={name} placeholder={placeholder} value={value}
             onChange={onChange} />
        </div>
    )
}

export default InputField
