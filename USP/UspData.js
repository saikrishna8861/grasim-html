var slidingTagLiAfterAndBefore = document.createElement("style");
slidingTagLiAfterAndBefore.innerHTML =
 ".carousel-control-prev-icon { background-image: url('./img/start.svg') !important; } .carousel-control-next-icon {  background-image: url('./img/end.svg') !important; transform: none !important }";
document.head.appendChild(slidingTagLiAfterAndBefore);

$('.carousel').carousel({
    interval: false,
})

function checkitem()
{
    var $this = $('#carousel-1');
    if ($('.carousel-inner .carousel-item:first').hasClass('active')) {
        $this.children('.carousel-control-prev').hide();
    } else if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
        $this.children('.carousel-control-next').hide();
    } else {
        $this.children('.carousel-control').show();

    }
}
