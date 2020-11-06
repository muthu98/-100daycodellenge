import React, { useRef, useState } from 'react'
import "./Snake.css"


import { useInterval } from "./Interval";
import { APPLE_START, DIRECTIONS, FOOD_IMG, GROUND_IMG, SCALE, SNAKE_START, SPEED } from './Constants';
function Snake() {


    const [speed, SetSpeed] = useState(SPEED)
    const [direction, SetDirection] = useState([0, -1])
    const [isStart, setisStart] = useState(false)
    const [isgameover, SetISgameover] = useState(false)
    const [food, SetFood] = useState(APPLE_START)
    const [Score, setScore] = useState(0)

    const Canvas = useRef()
    const button = useRef()
    const box = SCALE
    let snakebody = SNAKE_START

    const initialdraw = (context) => {
        context.fillStyle = "green";
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)

        context.drawImage(GROUND_IMG, 32, 64, 544, 512)
        context.drawImage(FOOD_IMG, food.x, food.y, 32, 32)
        for (let i = 0; i < snakebody.length; i++) {

            context.fillStyle = (i === 0) ? "gren" : "white"
            context.fillRect(snakebody[i].x, snakebody[i].y, box, box)
            context.strokeStyle = "red"
            context.strokeRect(snakebody[i].x, snakebody[i].y, box, box)

        }




    }
    const collision=(head,array)=>{

        for(let i=0;i<array.length;i++){
            if(head.x===array[i].x  && head.y===array[i].y)  return true
            
        }

    }
    const drawgame = () => {

        const context = Canvas.current.getContext('2d')

        initialdraw(context)

        //old head postion
        let snakeX = snakebody[0].x
        let snakeY = snakebody[0].y

        //if snake eat 

        if (snakeX === food.x && snakeY === food.y) {
            console.log("food reached");
            setScore(Score + 1)
            SetFood({
                x: (Math.floor(Math.random() * (17 - 1)) + 1) * box,
                y: (Math.floor(Math.random() * (17 - 2)) + 2) * box
            }
            )
        }
        else {
            //remove tail
            snakebody.pop()
        }
     


        //direaction
        if (isStart) {

            snakeX += direction[0] * box
            snakeY += direction[1] * box

        }


        //new head add

        let newHead = {
            x: snakeX,
            y: snakeY
        }
       

        if (snakeX < box || snakeX > 17* box || snakeY < 2 * box || snakeY > 17 * box || collision(newHead,snakebody)) {
            SetSpeed(null)
            SetISgameover(true)
        }

       
        snakebody.unshift(newHead)
        context.fillStyle = "white";
        context.font = "45px Changa One";
        context.fillText("Score:", 1.2 * box, 1.2 * box);
        context.fillText(Score, 4.8 * box, 1.3 * box);
    }

    const moveSnake = ({ keyCode }) => {

        console.log(direction[1]);
        if (keyCode === 40 && direction[1] !== -1) SetDirection(DIRECTIONS[keyCode]);      //down
        else if (keyCode === 38 && direction[1] !== 1) SetDirection(DIRECTIONS[keyCode]);    //up
        else if (keyCode === 37 && direction[0] !== 1) SetDirection(DIRECTIONS[keyCode]);   //left
        else if (keyCode === 39 && direction[0] !== -1) SetDirection(DIRECTIONS[keyCode]); //right

    }



    useInterval(() => drawgame(), speed);


    const startgame = () => {
        // button.current.style.display="none"
        if (isStart) {
            setisStart(false)
            SetSpeed(null)

        } else {
            setisStart(true)
            SetSpeed(SPEED)
        }

    }


    return (

        <div role="button" tabIndex="0" className="gamebody" onKeyDown={moveSnake}>
            <canvas ref={Canvas} width="608px" height="608px" />

            <button className="playButton" ref={button} onClick={startgame}> {isStart ? "Pause" : "play"}</button>

            { isgameover ?
                <div className="modal" >
                    <div className="messagebox">
                        <span className="message">GAME OVER</span>
                        <button className="playagainbutton" onClick={()=> window.location.reload()} > play Again</button>
                    </div>

                </div>
                : null}

        </div>
    )
}

export default Snake
