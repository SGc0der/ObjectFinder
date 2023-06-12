function setup() {
    canvas = createCanvas(500, 360);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 500, 360);
    if(status_ != "") {
        for(i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("objects").innerHTML = "Number of Objects = " + objects.length;
            percent = floor(objects[i].confidence * 100);
            fill("black");
            stroke("black");
            text(objects[i].label + " " + percent, objects[i].x + 15, objects[i].y + 15);
            noFill();
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            if(object == objects[i].label) {
                video.stop();
                objectDetector.detect(gotResults);
                document.getElementById("object_status") = "Object Mentioned Found";
            }else{
                document.getElementById("object_status") = "Object Mentioned Not Found";
            }
        }
    }
}
function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
    object = document.getElementById("input").value;
}
status_ = ""; 
object = "";
function modelLoaded() {
    status_ = true;
    console.log("model loaded");
}
objects = [];
function gotResults(results, error) {
    if(error) {
        console.log(error);
    }
    objects = results;
    console.log(objects);
}