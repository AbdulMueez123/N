prediction_1 = "";
prediction_2 = "";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera =document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="Capture_image" src="'+data_uri+'"/>'
    });
}
console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jxXk2Xu5O/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model loaded")
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1)
    synth.speak(utterthis);
}
