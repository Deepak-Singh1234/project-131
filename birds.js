birds = "";

function preload(){
    birds = loadImage("birds.jpg");

}

function setup(){
    canvas = createCanvas(500,420);
    canvas.center();


}

function draw(){
    image(birds , 0 ,0 , 500 , 420);

    fill("#00a6ff");
    text("bird" , 30 , 70 );
    stroke("#00a6ff");
    noFill();
    rect(0 , 60 , 200,350);
    stroke("#ffff00");
    rect(180 , 40 , 180 , 550);
    text("bird" ,190 ,  60);
    stroke("#2200ff");
    rect(330 , 40 , 180 , 550);
    text("bird",330 , 70);
}

function back(){
    window.open("index.html");
}