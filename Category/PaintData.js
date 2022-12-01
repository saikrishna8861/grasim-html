$('.owl-carousel').owlCarousel({
    margin:15,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:2.5
        },
        600:{
            items:3.5
            
        },
        1000:{
            items:5
        }
    }
})
function onMouseDown () {
    dragging = true;
}
// handlers bound to the element only once
addEvent (element, 'close', onMouseDown);