var tint_color="";
function preload(){

}

function setup(){
canvas=createCanvas(500,500);
video=createCapture(VIDEO);
video.hide();
}

function draw(){
stroke("purple");
fill("yellow");
rect(0,0,500,500);
fill("green")
rect(15,15,470,470)
image(video,15,15,470,470);
fill("blue")
circle(15,15,50)
circle(15,485,50)
circle(485,15,50)
circle(485,485,50)

}

function take_snapshot(){
    save("jiya.png");
}

