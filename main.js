//https://teachablemachine.withgoogle.com/models/IHscyawsS/
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    camera=document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot(){
    Webcam.snap(function(data_uri){
  document.getElementById('results').innerHTML="<img id='results_images' src="+data_uri+">"
    });
}
//console.log('ml5.version:',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IHscyawsS/",modelLoaded);
function modelLoaded(){
  console.log("Model is Loaded!!!!!!")
}
function check(){
  img=document.getElementById("result_image");
  classify.classify(img,gotResult);
}
function gotResult(error,result){
if(error){
  console.error(error);
}
else{
  console.log(result);
  document.getElementById("result_1").innerHTML=results[0].label;
  document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}