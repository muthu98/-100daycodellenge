import React from 'react'
import './Bubble.css'
import logo from './image/logo.png'
import menu from './image/menu.png'
import fb from './image/fb.png'
import ig from './image/ig.png'
import tw from './image/tw.png'
import info from './image/info.png'
import share from './image/share.png'
import bubble from './image/bubble.png'
function Bubble() {
    return (
        <div className="bubblecontainer">
            
            <div className="content" >
                <small>Wlecome All </small>
                <h1>To Bubble <br /> Effect</h1>

            </div>
            <div className="side-bar" >
                <img src={menu} alt="menu" className="menu" />
                <div className="socialLink" >
                    <img src={fb} alt="logo" />
                    <img src={ig} alt="logo" />
                    <img src={tw} alt="logo" />
                </div>
                <div className="usefulLink" >
                    <img src={info} alt="logo" />
                    <img src={share} alt="logo" />
                   
                </div>

            </div>
            <div className="bubbles" >
                <img src={bubble} alt="bubble" />
                <img src={bubble} alt="bubble" />
                <img src={bubble} alt="bubble" />
                <img src={bubble} alt="bubble" />
                <img src={bubble} alt="bubble" />
                <img src={bubble} alt="bubble" />
                <img src={bubble} alt="bubble" />


            </div>

        </div>
    )
}

export default Bubble
