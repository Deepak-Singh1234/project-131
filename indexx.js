dog_cat = "";

function preload(){
    dog_cat = loadImage("dog_cat.jpg");

}

function setup(){
    canvas = createCanvas(500,420);
    canvas.center();


}

function draw(){
    image(dog_cat , 0 ,0 , 500 , 420);
    fill("#00a6ff");
    noFill();
    stroke("#00a6ff");
    rect(10 , 50 , 300 , 300);
    text("cat",20,70);
     
    fill("#ff0000");
    noFill();
    stroke("#ff0000");
    rect(300 , 50 , 300 , 300);
    text("dog" , 310 , 70);
    
}

function back(){
    window.open("index.html");
}