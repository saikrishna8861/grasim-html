
var slidingTagLiAfterStyle = document.createElement("style");
slidingTagLiAfterStyle.innerHTML =
 ".accordion-button.collapsed::after { background-image: url('./img/down.svg') !important; } .accordion-button:not(.collapsed)::after {  background-image: url('./img/up.svg') !important; transform: none !important }";
document.head.appendChild(slidingTagLiAfterStyle);





