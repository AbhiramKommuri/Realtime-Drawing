function setup(){
    canvas = createCanvas(550,500);
    canvas.postition(560,150);
    
    video = createCapture(VIDEO);
    video.size(550,500);
    
    pose_Net = ml5.poseNet(video,modelLoaded);
    
    pose_Net.on('pose',gotresults)
    };
    
    function draw(){
    background('#e3e3e3');
    };
    
    function modelLoaded(){
    console.log("Model poseNet Loaded")
    console.log(video);
    };
    
    function gotresults(results,error){
    if(results.length>0){
    console.log(results);
    }
    else{
    console.error(error);
    };
    };
    
    