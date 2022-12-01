$('.owl-carousel').owlCarousel({
    margin:25,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1.2
        },
        600:{
            items:1.2
            
        },
        1000:{
            items:2.5
        }
    }
})
function onMouseDown () {
    dragging = true;
}
// handlers bound to the element only once
addEvent (element, 'close', onMouseDown);
