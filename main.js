speech="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("cameraa");

Webcam.attach('#cameraa');

function take_snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });

}

console.log("ml5 version",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9Ex0-so-m/model.json',modelLoaded);

function modelLoaded(){

    console.log('model loaded');

}

function check(){
    img=document.getElementById("results");
    classifier.classify(img,gotResult);

}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        if(results[0].label=="a"){
            document.getElementById("oo").innerHTML="prediction 1:"+"<span>&#128076;|</span>";
            speech="this is looking amazing";
        }
        else if(results[0].label=="b"){
            document.getElementById("oo").innerHTML="prediction 1:"+"<span>&#128077;|</span>";
            speech="all the best";
        }
        else if(results[0].label=="c"){
            document.getElementById("oo").innerHTML="prediction 1:"+"<span>&#9996;|</span>";
            speech="marvelous victory";  
        }
    }
}



function speak(){
synth=window.speechSynthesis;
speak_data=speech;
utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}























