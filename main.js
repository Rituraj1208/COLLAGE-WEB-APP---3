var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event) {
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if (content=="take my selfie") {
        console.log("taking selfie...");
        speak();
    }
}

function speak() {
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function() {
        take_snapshot();
        save();  
        },5000);
        setTimeout(function() {
            take_snapshot();
            save();  
            },10000);  
        }  
        setTimeout(function() {
            take_snapshot();
            save();  
            },15000);  

Webcam.set({
   width: 360,
   heigh: 250,
   image_format: 'jpeg', 
   jpeg_quality: 90
});

camera=document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='selfie_image' src=" + data_uri + ">";
    });
    Webcam.snap(function(data_uri) {
        document.getElementById("result1").innerHTML = "<img id='selfie_image' src=" + data_uri + ">";
    });
    Webcam.snap(function(data_uri) {
        document.getElementById("result2").innerHTML = "<img id='selfie_image' src=" + data_uri + ">";
    });
}

function save() {
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}
