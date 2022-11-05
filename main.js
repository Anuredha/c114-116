nose_x = 0;
nose_y = 0;

function preload(){
    clown_nose = loadImage("https://i.postimg.cc/9X4gk4K1/mustache-1.png");

}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();

video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);


}

function modelLoaded(){
    console.log("poseNet is initisalized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log("results");
        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);

        nose_x = results[0].pose.nose.x -30;
        nose_y = results[0].pose.nose.y ;


    }

}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, nose_x, nose_y, 60, 60);

}
function take_snapshot(){
    save("tanushfilterimage.png");
    
}
