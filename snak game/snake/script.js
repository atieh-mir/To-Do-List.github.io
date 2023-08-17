const playBoard=document.querySelector(".play-board");

let createSnake,createFood;
let foodX,foodY;
let snakeX=20,snakeY=5;
let snakeBody=[];
let velocityX=0,velocityY=0;


function callFunc(){
    changeFoodPosition();
}
const changeFoodPosition=()=>{
    foodX=Math.floor(Math.random()*30)+1;
    foodY=Math.floor(Math.random()*30)+1;
}
 const createElement=()=>{

     createFood=`<div class="food" style="background:red;grid-area:${foodY}/${foodX}"</div>`
     playBoard.innerHTML=createFood;


     if (snakeX===foodX&&snakeY===foodY){
         changeFoodPosition();
        snakeBody.push([foodX,foodY]);

     }
     for (let i=snakeBody.length;i>0;i--){
         snakeBody[i]=snakeBody[i-1]
     }
    snakeBody[0]=[snakeX,snakeY];
     snakeX+=velocityX;
     snakeY+=velocityY;
     for (let i=0;i<snakeBody.length;i++) {
     createSnake=`<div class="snake" style="background:green;grid-area:${snakeBody[i][1]}/${snakeBody[i][0]}"</div>`
    }
     playBoard.innerHTML+=createSnake;
 }

   document.addEventListener("keydown",   moveSnake=(e)=>{
       if (e.keyCode === 38) {

           velocityX=0;
           velocityY=-1;
       }
        else if (e.keyCode === 40) {

           velocityX=0;
           velocityY=1;
       }
        else if (e.keyCode === 37) {
           velocityX=-1;
           velocityY=0;
       } else if (e.keyCode === 39) {
           velocityX=1;
           velocityY=0;
       }


   });





setInterval( createElement,125);

 callFunc();
