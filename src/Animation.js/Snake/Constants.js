import Food from './Image/apple1.png'
import Ground from './Image/ground.jpg'

const CANVAS_SIZE = [608, 608];
const SCALE = 32;
const SNAKE_START = [
  {
    x: 9 * SCALE,
    y: 10 * SCALE
  },
]


const APPLE_START = {
  x: (Math.floor(Math.random() * (17 - 1)) + 1) * SCALE,
  y: (Math.floor(Math.random() * (17 - 2)) + 2) * SCALE
}

const SPEED = 500;
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0] // right
};
const GROUND_IMG = new Image()
GROUND_IMG.src = Ground

const FOOD_IMG = new Image()
FOOD_IMG.src = Food
export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
  GROUND_IMG,
  FOOD_IMG
};