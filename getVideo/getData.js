

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

$('.owl-carousel').owlCarousel({
    margin:25,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1.7
        },
        600:{
            items:1.7
            
        },
        1000:{
            items:3.8
        }
    }
})
function onMouseDown () {
    dragging = true;
}
// handlers bound to the element only once
addEvent (element, 'close', onMouseDown);



