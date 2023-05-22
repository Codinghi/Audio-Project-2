function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PtE_NRGeL/model.json', modelReady);
};

function modelReady(){
classifier.classify(gotResults());
;}

