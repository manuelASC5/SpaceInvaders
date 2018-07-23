// define game state
//Manuel,Samuel
let playerX = 230;
let bullets=[];
let enemies=[];

let img
let photo
let blueal
let yellowal
let al
let b
let a

function setup(){
    createCanvas(500,500);
    fill(0,0,225);
    stroke(225);
    background(55);
    img=loadImage("https://image.ibb.co/i5yCzJ/mothership.png");
    photo=loadImage("https://image.ibb.co/nsG7zJ/7xorMEk.jpg");
    blueal=loadImage("https://image.ibb.co/mMxxzJ/blue.jpg");
    yellowal=loadImage("https://image.ibb.co/ktLW9J/yellow.jpg");
    al=loadImage("https://image.ibb.co/hTE2Gy/space_invaders_wallpaper_3_by_tangooscarmik3_d3ds1jx.jpg");
    b =loadImage("https://image.ibb.co/gXeDOd/orange.jpg");
    a =loadImage("https://image.ibb.co/cUwGby/bllll.jpg");

}

function drawGame(){
    background(photo);
     //base
     fill("green");
     rect(20,390,50,50);
     rect(150,390,50,50);
     rect(280,390,50,50);
     rect(400,390,50,50);
    //mother ship
    image(img,220,0,img.width/4.5,img.height/4.5);
     //player
     fill("white");
     rect(playerX,450,20,40)  
     
     for(let i=0; i<bullets.length; i++){
        let x = bullets[i][0];
        let y = bullets[i][1];
        rect(x, y, 5, 5);
    }
}


function keyPressed (){
    if (keyIsDown(LEFT_ARROW)){
        playerX -=5;    
    }    
    if (keyIsDown(RIGHT_ARROW)){
        playerX +=5;   
    }
    if(keyCode == 32){
        let bullety=[playerX,450];
        bullets.push(bullety);
    }
    
}

function keyIsDown(param){
    return key == param
}

function draw(){
    drawGame();
    nextStep();
    for (let i = 0; i < 11; i++) {
        image(blueal,30 + 40*i, 100, 30, 30)
    }
    for (let i = 0; i < 11; i++) {
        image(yellowal, 30 + 40*i, 150, 30, 30)
    }
    for (let i = 0; i < 11; i++) {
        image(al, 30 + 40*i, 50, 30, 30)
    }
    for (let i = 0; i < 11; i++) {
        image(b, 30 + 40*i, 200, 30, 30)
    }
    for (let i = 0; i < 11; i++) {
        image(a, 30 + 40*i, 250, 30, 30)
    }
}
function nextStep(){
    for(let i=0; i<bullets.length; i++){
        bullets[i][1] = bullets[i][1] - 1;
    }
}   
