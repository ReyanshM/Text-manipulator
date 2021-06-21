fontSize=0;
rough=0;
positionx=0;
positiony=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,300);
    video.parent('liveVideo');
    canvas=createCanvas(500,300);
    canvas.parent('canvas');
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',Result);
}
function modelLoaded(){
    console.log("The model is loaded");
}
function Result(result){
    console.log(result);
    if(result.length>0){
        rough=result[0].pose.rightElbow.x;
        fontSize=rough - result[0].pose.rightElbow.x;
        positionx=result[0].pose.nose.x;
        positiony=result[0].pose.nose.y;
    }
}
function draw(){
    background('grey');
    text('Text',positionx,positiony);
    textSize(fontSize);
    fill('red');
    document.getElementById('fontSizeOfTheText').textContent=fontSize;
}
