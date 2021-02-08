var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    Block1=createSprite(100,590,200,20)
    Block1.shapeColor="blue"
    Block2=createSprite(300,590,200,20)
    Block2.shapeColor="green"
    Block3=createSprite(500,590,200,20)
    Block3.shapeColor="orange"
    Block4=createSprite(700,590,200,20)
    Block4.shapeColor="red"
    ball=createSprite(400,300,40,40)
    ball.shapeColor="white"
    ball.velocityX=4;
    ball.velocityY=8;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(Block1.isTouching(ball)&& ball.bounceOff(Block1)){
        ball.shapeColor="blue"
        music.play();
    }

    if(Block2.isTouching(ball)&& ball.bounceOff(Block2)){
        ball.shapeColor="green"
        music.play();
    }
    if(Block3.isTouching(ball)&&ball.bounceOff(Block3)){
        ball.shapeColor="orange"
        music.play();
    }
    
    if(Block4.isTouching(ball)&&ball.bounceOff(Block4)){
    ball.shapeColor="red"
    music.play();
    }


    drawSprites();

}
