const playBoard = document.querySelector(".play-board");

let createSnake, createFood;
let foodX, foodY;
let snakeX = 20, snakeY = 5;
let snakeBody = [];
let velocityX = 0, velocityY = 0;

function callFunc() {
    changeFoodPosition();
}

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const createElement = () => {
    createFood = `<div class="food" style="background:red;grid-area:${foodY}/${foodX};"></div>`;

    if (snakeX === foodX && snakeY === foodY) {
        changeFoodPosition();
        snakeBody.push([foodX, foodY]);
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = [...snakeBody[i - 1]];
    }
    snakeBody[0] = [snakeX, snakeY];
    snakeX += velocityX;
    snakeY += velocityY;

    let snakeElements = '';
    for (let i = 0; i < snakeBody.length; i++) {
        snakeElements += `<div class="snake" style="background:green;grid-area:${snakeBody[i][1]}/${snakeBody[i][0]};"></div>`;
    }

    playBoard.innerHTML = createFood + snakeElements;
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }
});

setInterval(createElement, 125);
callFunc();

