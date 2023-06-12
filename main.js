function setup() {
    canvas = createCanvas(500, 360);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 500, 360);
}
function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
    object = document.getElementById("objects").value;
}
status_ = ""; 
object = "";
function modelLoaded() {
    status_ = true;
    console.log("model loaded");
}
