import React from 'react'
import InputField from '../Library/InputField/InputField'
// import InputLabel from '../Library/InputLabel/InputLabel'
import './Forms.css'
function Forms() {
    const handelvalue = (e) => {

        console.log(e.target.name);
        console.log(e.target.value);
    }
    return (
        <div className="card" >
            <InputField type="text" id="username" name="username" label="UserName" variants="Outline" onChange={handelvalue} />
            <InputField type="password" id="password" name="password" label="PassWord" onChange={handelvalue} variants="Outline" />
            <InputField type="date" id="datevalue" name="datevalue" label="DateofBirth" variants="Outline" onChange={handelvalue} />

            <InputField type="text" id="username1" name="username1" label="UserName" onChange={handelvalue}  />
            <InputField type="password" id="password1" name="password1" label="PassWord" onChange={handelvalue} />

            <InputField type="date" id="datevalue1" name="datevalue1" label="DateofBirth"  onChange={handelvalue} />

        </div>
    )
}

export default Forms
