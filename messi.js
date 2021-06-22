birds = "";

function preload(){
    birds = loadImage("messiball.jpg");

}

function setup(){
    canvas = createCanvas(500,420);
    canvas.center();


}

function draw(){
    image(birds , 0 ,0 , 500 , 420);
    fill("#ffff00");
    noFill();
    stroke("#ffff00");
    rect(180 , 40 , 180 , 550);
    text("LIONEL MESSI" ,190 ,  60);
   
}

function back(){
    window.open("index.html");
}