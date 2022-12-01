var myVideo = document.getElementsByClassName("videoPath");
function playPause(){
    if(myVideo.paused){
        myVideo.play();
        document.getElementsByClassName("playPause_img").style.backgroundImage ="none";
    }
    else{
        myVideo.pause();
        document.getElementsByClassName("playPause_img").style.  backgroundImage = "url('./img/Play\ Icon\ Web.svg')";
    }
}
