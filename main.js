difference = 0;
leftWrist = 0;
rightWrist = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size (500, 500);

    canvas = createCanvas(500, 500);
    canvas.position (800, 115);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet has Initialized");
}

function gotPoses(result){
    if (result.length > 0){
        console.log(result);

      leftWrist = result[0].pose.leftWrist.x;
      rightWrist = result[0].pose.rightWrist.x;
      difference = floor(leftWrist - rightWrist);

      console.log("leftWrist x = "+leftWrist+ " rightWrist x = "+rightWrist+ " difference = "+difference);
    }
}

function draw(){
    background('#2403fc');
    textSize(difference);
    fill("#03e7fc");
    text("Siya", 100, 250);
}