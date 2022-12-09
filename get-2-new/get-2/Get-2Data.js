

var myVideo = document.getElementById("videoPath");
function playPauseVideo(){
    if(myVideo.paused){
        myVideo.play();
        document.getElementById("playPause_img").style.backgroundImage ="none";
    }
    else{
        myVideo.pause();
        document.getElementById("playPause_img").style.  backgroundImage = "url('./img/Play\ Icon\ Web.svg')";
    }
}
