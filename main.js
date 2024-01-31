function setup() 
{
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(20, 220)

    canvas = createCanvas(550, 550);
    canvas.position(950, 300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#FFB6C1');
}

function modelLoaded() 
{
    console.log('Posenet is initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}