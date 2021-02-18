import { gameboard } from './Board/index.js';
import { SNAKE_SPEED, draw as snakeDraw, update as snakeUpdate } from './snake/index.js'

//const gameboard = document.getElementById('game-board'); 



let LastTimeRender = 0;

// current time -> miliseconds
function main (currentTime){

    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - LastTimeRender) / 1000;

    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    LastTimeRender = currentTime;
    console.log(LastTimeRender);

    update(); {
        snakeUpdate();
    }

    draw(); {
        gameboard.innerHTML = '';
        snakeDraw();
    }

}

function update() {};

function draw() {};

window.requestAnimationFrame(main)