noseX=0;
noseY=0;
rightwristX=0;
leftwristX=0;
difference=0;

function setup(){
canvas= createCanvas(500,500);
canvas.position(500,150);

video= createCapture(VIDEO);
video.size(400,400);

poseNet= ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses);

}

function modelloaded(){
console.log('poseNet is now initialized');


}

function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX="+noseX+"noseY="+noseY);
leftwristX=results[0].pose.leftWrist.x;
rightwristX=results[0].pose.rightWrist.x;
difference=floor(leftwristX - rightwristX);
console.log("leftwrist="+leftwristX+"rightwrist="+rightwristX+"difference="+difference);
}

}

function draw(){
background('#DC143C');
fill('#FFFF00');
stroke('#0000FF');
square(noseX,noseY,difference);
document.getElementById('square').innerHTML="The length of your square is "+difference+"px";
}
